// Checks the built HTML (dist/) for v1.F head tags: og:image on every page, a home
// <title> under 60 chars, one twitter:card per page, and BreadcrumbList on every
// page except home and 404. Run after `pnpm build`.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return e.name === '_astro' ? [] : htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

const pages = existsSync(DIST) ? htmlFiles(DIST) : [];

describe('built <head> (dist/)', () => {
  it('has built pages', () => {
    expect(pages.length).toBeGreaterThan(0);
  });

  it('every page has og:image and exactly one twitter:card', () => {
    for (const p of pages) {
      const html = readFileSync(p, 'utf8');
      expect(html, p).toMatch(/property="og:image" content="https:\/\/cottagefoodmap\.com\/og\.png"/);
      expect(html.match(/name="twitter:card"/g) ?? [], p).toHaveLength(1);
    }
  });

  it('home <title> is under 60 characters', () => {
    const html = readFileSync(join(DIST, 'index.html'), 'utf8');
    const title = html.match(/<title>([^<]*)<\/title>/)[1].replace(/&#38;|&amp;/g, '&');
    expect(title.length).toBeLessThan(60);
  });

  it('every page except home and 404 has a BreadcrumbList ending at its canonical', () => {
    for (const p of pages) {
      if (p === join(DIST, 'index.html') || p === join(DIST, '404.html')) continue;
      const html = readFileSync(p, 'utf8');
      const ld = [...html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)]
        .map((m) => JSON.parse(m[1]))
        .find((j) => j['@type'] === 'BreadcrumbList');
      expect(ld, p).toBeTruthy();
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
      expect(ld.itemListElement.at(-1).item, p).toBe(canonical);
      expect(ld.itemListElement[0].item, p).toBe('https://cottagefoodmap.com/');
    }
  });
});
