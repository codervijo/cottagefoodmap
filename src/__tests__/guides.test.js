// v2.D guide-depth checks. Data checks run on src/data; page checks read the built HTML
// (dist/), so run them after `pnpm build`.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { STATES } from '../data/states';

const DIST = join(process.cwd(), 'dist');

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return e.name === '_astro' ? [] : htmlFiles(p);
    return e.name === 'index.html' ? [p] : [];
  });
}

const pages = existsSync(DIST) ? htmlFiles(DIST) : [];
const urlOf = (p) => p.slice(DIST.length).replace(/index\.html$/, '');
const guides = pages.filter((p) => /^\/guides\/(sell|license-cost|labeling)\//.test(urlOf(p)));

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

// Visible body text: drop head, scripts, header/nav/footer chrome, then tags.
function bodyText(html) {
  return decode(
    html
      .replace(/<head>[\s\S]*?<\/head>/, '')
      // Citations are references, not prose: they repeat wherever a source is cited.
      .replace(/<span class="citation">[\s\S]*?<\/span>/g, ' ')
      .replace(/<a class="citation"[\s\S]*?<\/a>/g, ' ')
      .replace(/<(script|style|header|footer|nav)\b[\s\S]*?<\/\1>/g, ' ')
      .replace(/<\/(p|li|h[1-6]|td|th|div|dd|dt)>/g, '\n')
      .replace(/<[^>]+>/g, ' '),
  );
}

describe('food status overrides (src/data)', () => {
  it('every override cites at least one official source', () => {
    for (const s of STATES) {
      for (const [slug, o] of Object.entries(s.food_status_overrides ?? {})) {
        expect(o.sources?.length ?? 0, `${s.slug}/${slug}`).toBeGreaterThan(0);
        for (const src of o.sources) {
          expect(src.source_url, `${s.slug}/${slug}`).toMatch(/^https:\/\//);
          expect(src.last_verified, `${s.slug}/${slug}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        }
      }
    }
  });
});

describe('guide pages (dist/)', () => {
  it('has built guides', () => {
    expect(guides.length).toBeGreaterThan(0);
  });

  it('every guide links to its state page and the guides hub', () => {
    for (const p of guides) {
      const html = readFileSync(p, 'utf8');
      const state = urlOf(p).split('/').filter(Boolean).pop();
      expect(html, urlOf(p)).toContain(`href="/states/${state}/"`);
      expect(html, urlOf(p)).toContain('href="/guides/"');
    }
  });

  it('FAQPage JSON-LD questions and answers are visible on the page', () => {
    let checked = 0;
    for (const p of pages) {
      const html = readFileSync(p, 'utf8');
      const text = bodyText(html).replace(/\s+/g, ' ');
      for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
        const ld = JSON.parse(m[1]);
        if (ld['@type'] !== 'FAQPage') continue;
        for (const q of ld.mainEntity) {
          expect(text, urlOf(p)).toContain(q.name);
          // The answer joins the cited statements, which render consecutively once
          // citations are stripped.
          expect(text, `${urlOf(p)} — ${q.name}`).toContain(q.acceptedAnswer.text.replace(/\s+/g, ' '));
          checked++;
        }
      }
    }
    expect(checked).toBeGreaterThan(0);
  });

  it('no body sentence of 8+ words appears on more than 15 pages', () => {
    const counts = new Map();
    for (const p of pages) {
      const lines = new Set(
        bodyText(readFileSync(p, 'utf8'))
          .split('\n')
          .map((l) => l.replace(/\s+/g, ' ').trim())
          .filter((l) => l.split(' ').length >= 8),
      );
      for (const l of lines) counts.set(l, (counts.get(l) ?? 0) + 1);
    }
    const repeated = [...counts].filter(([, n]) => n > 15).map(([l, n]) => `${n}× ${l}`);
    expect(repeated).toEqual([]);
  });
});
