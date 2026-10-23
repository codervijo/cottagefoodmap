// v2.F compare-page checks: every table cell cites its source (ADR-010). Reads the built HTML
// (dist/), so run after `pnpm build`.

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { STATES } from '../data/states';

const FILE = join(process.cwd(), 'dist', 'compare', 'index.html');
const html = existsSync(FILE) ? readFileSync(FILE, 'utf8') : '';
const cells = [...html.matchAll(/<td[^>]*data-cell[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]);

describe.skipIf(!html)('compare page (dist/)', () => {
  it('has one cell per state per column', () => {
    expect(cells.length).toBe(STATES.length * 7);
  });

  it('every cell shows a cited value with a verified date, or says Unverified', () => {
    for (const c of cells) {
      if (c.trim() === 'Unverified') continue;
      const cites = [...c.matchAll(/<a href="(https:\/\/[^"]+)"[^>]*>Source<\/a> · ([A-Z][a-z]{2} \d{1,2}, \d{4})/g)];
      const values = [...c.matchAll(/<div class="mb-1">/g)];
      expect(cites.length, c).toBeGreaterThan(0);
      expect(cites.length, c).toBe(values.length);
    }
  });

  it('shows every tier of a tiered cap', () => {
    for (const s of STATES) {
      const f = s.sales_cap_usd_annual;
      if (f.unverified || !Array.isArray(f.value)) continue;
      for (const t of f.value) expect(html, `${s.slug} ${t.class}`).toContain(t.class);
    }
  });

  it('links every state to its page', () => {
    for (const s of STATES) expect(html).toContain(`href="/states/${s.slug}/"`);
  });
});
