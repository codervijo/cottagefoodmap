// src/__tests__/trailing-slash.test.js
// Cloudflare 308s /path → /path/. Internal links and Seo `path` props must
// point at the final 200 URL, or canonicals redirect and GSC splits the page
// into two URLs (seen 2026-09: /states/california vs /states/california/).

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return name === '__tests__' ? [] : walk(p);
    return /\.(astro|tsx)$/.test(name) ? [p] : [];
  });
}

describe('internal URLs end with a trailing slash', () => {
  const files = walk(join(process.cwd(), 'src'));
  // href="/x", href={`/x/${y}`}, path="/x" — skip files with an extension (/favicon.svg).
  const re = /(?:href|path)=\{?["`](\/[^"`]*)["`]/g;

  for (const file of files) {
    it(file.replace(process.cwd() + '/', ''), () => {
      const src = readFileSync(file, 'utf8');
      const bad = [...src.matchAll(re)]
        .map((m) => m[1])
        .filter((u) => !u.endsWith('/') && !/\.[a-z0-9]+$/i.test(u));
      expect(bad).toEqual([]);
    });
  }
});
