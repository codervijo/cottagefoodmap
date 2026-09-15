# Architecture — cottagefoodmap.com

Status as of v1.B (2026-09-15). Roadmap and phases live in `docs/prd.md`.

## 1. Overview

A fully static Astro site. All content is generated at build time from typed state-law data in
`src/data/`; there is no server runtime, database, or CMS. Every factual field carries its own
source URL and verification date, and pages render those citations inline. Output is 63
prerendered HTML pages plus `sitemap-index.xml`, served by Cloudflare.

```
src/data/states/*.ts ──┐
src/data/foods.ts ─────┼─► src/pages/**/*.astro (getStaticPaths) ─► dist/**/index.html ─► Cloudflare
src/data/phrases.ts ───┘                                            dist/sitemap-index.xml
```

## 2. Module map

| Path | Role |
|---|---|
| `src/data/schema.ts` | `StateLaw` interface, `Fact<T>` (value + `source_url` + `last_verified`) / `Unverified` union, `isUnverified` guard |
| `src/data/states/<state>.ts` | One `StateLaw` record per state (CA, FL, NY, OH, TX), 12 facts each, 2 source URLs each |
| `src/data/states/index.ts` | `STATES` (sorted by name), `STATES_BY_SLUG`, `getState` |
| `src/data/foods.ts` | 7 `FoodCategory` entries with substring `match` terms; `foodMatches`, `statusForFood`, `STATUS_ANSWER` |
| `src/data/phrases.ts` | Short data-derived phrases for titles/descriptions (`permitPhrase`, `costPhrase`, `costTitle`, `capPhrase`, `joinPhrases`); unverified facts return `null` |
| `src/layouts/Layout.astro` | HTML shell, header nav, footer disclaimer, site-wide `WebSite` JSON-LD |
| `src/components/Seo.astro` | Per-page `<title>`, description, canonical (forced trailing slash), Open Graph |
| `src/components/StateDetail.tsx` | React: full state page body (rendered to static HTML) |
| `src/components/StatesList.tsx` | React island (`client:load`) on `/states/` — client-side filtering |
| `src/components/Fact.tsx` | React: renders one `Fact<T>` with source link and verified date |
| `src/components/Disclaimer.astro` / `.tsx` | "Not legal advice" notice |
| `src/pages/` | Routes — see §4 |
| `src/__tests__/` | Vitest: `seo.test.js`, `trailing-slash.test.js`, `foods.test.ts`, `smoke.test.js` |
| `genai/` | Original Lovable/TanStack Start export the Astro port was translated from (v1.B). Reference only; not built |
| `public/` | `_headers` (cache + security headers), `robots.txt`, `favicon.svg`, IndexNow key file |

## 3. Data model

- **`Fact<T>`** — `{ value, source_url, source_title?, last_verified, notes? }` or `{ unverified: true, note? }`.
  `source_url` must be an official source (state .gov, statute, official PDF). Unverified facts
  render as gaps; nothing is guessed.
- **`StateLaw`** fields (12 facts): `program_name`, `agency`, `permit_required`, `permit_details`,
  `license_cost_usd` (`number | "varies" | "none"`), `sales_cap_usd_annual` (`number | "none"`),
  `allowed_foods`, `prohibited_foods`, `labeling_requirements`, `sales_channels`,
  `training_required`, `inspection_required`. Plus non-fact `caveats`, `sources`, `last_reviewed`.
- **Food status** is derived, not stored. `foodMatches` returns the state's own allowed/prohibited
  list items whose text contains any of the category's `match` substrings. `statusForFood`:
  both lists match → `restricted`; prohibited only → `prohibited`; allowed only → `allowed`;
  neither → `unclear`.

## 4. Page generation

| Route | Source | Count |
|---|---|---|
| `/` | `pages/index.astro` (own head tags, not `Seo.astro`) | 1 |
| `/states/`, `/states/<state>/` | `pages/states/` | 1 + 5 |
| `/compare/` | `pages/compare.astro` | 1 |
| `/foods/`, `/foods/<food>/` | `pages/foods/` | 1 + 7 |
| `/guides/` | `pages/guides/index.astro` | 1 |
| `/guides/license-cost/<state>/` | title/description include the cost answer | 5 |
| `/guides/labeling/<state>/` | | 5 |
| `/guides/sell/<food>/<state>/` | title ends with `STATUS_ANSWER`; description adds permit · fee · cap; lists matched items with sources | 35 |
| `/about/` | | 1 |

URL policy: every page URL, canonical, and internal link ends in `/` (`trailingSlash: 'always'`);
Cloudflare 308s the slashless form. Enforced by `trailing-slash.test.js`.

## 5. Build, test, deploy

- **Build:** `pnpm build` → `astro build` → `dist/` (directory format) + `@astrojs/sitemap`.
  Runs inside the `sites1` docker image (Node 22); the host Node is too old.
- **Test:** `pnpm test` → Vitest. `vitest.config.js` sets `environment: 'jsdom'`, which is not
  installed — run `pnpm exec vitest run --environment node` until v1.C fixes it.
- **CI:** `.github/workflows/ci.yml` — `pnpm install --frozen-lockfile`, build, test on push/PR.
- **Deploy:** push to `main` → Cloudflare Git integration builds and deploys (observed live
  ~30s after push on 2026-09-15). `lamill.toml` declares `cf-pages`; `wrangler.jsonc` configures
  static assets from `./dist`.

## 6. Decisions

- **ADR-001 (v1.B) — Static Astro, no server.** The TanStack Start export was ported to
  `output: 'static'`; server pieces were dropped (`src/lib/server-todo.md`). All content is
  build-time data, which suits prerendered, citable reference pages.
- **ADR-002 (v1.B) — Trailing-slash URLs everywhere.** Cloudflare serves directory-format pages
  at `/path/`; slashless canonicals 308'd and GSC split pages into two URLs.
- **ADR-003 (v1.B) — "Restricted" food status.** When a category matches both a state's allowed
  and prohibited lists, the answer is "Yes, with limits", not "No". Previously prohibited took
  precedence and CA/FL/NY/OH baked goods rendered "No".
- **ADR-004 (v1.B) — Titles and descriptions are derived from facts.** Guide titles carry the
  answer; descriptions are assembled from verified facts only (`phrases.ts`), so metadata can't
  drift from page content or state an unverified value.

## 7. Tracked refactors

- **Substring food matching.** `statusForFood` matches category terms as raw substrings against
  free-text list items (e.g. `"pie"` hits "Pumpkin pies", `"cake"` hits "cheesecake"). ADR-003
  fixed the visible symptom (both-list conflicts), but the root cause remains: status depends on
  list wording, not on structured per-category data. Candidate fix: store explicit per-category
  status (with source) in each `StateLaw`. Relevant to v1.D (re-verification) and v5
  (fact-correctness checks).
- **Duplicate head tags.** `Layout.astro` emits site-level `og:type`/`og:site_name`/`twitter:card`
  and `Seo.astro` emits per-page `og:type`; `index.astro` hand-writes its own head instead of
  using `Seo.astro`. Consolidate into one head component.

## 8. Known issues

- **Soft 404s.** Unknown URLs return HTTP 200 with the home page (verified 2026-09-15 on
  `/no-such-page-xyz/`), consistent with `not_found_handling: "single-page-application"` in
  `wrangler.jsonc`. There is no `src/pages/404.astro`. Fix planned in v1.E.
- **CI red** until v1.C: `pnpm-lock.yaml` is untracked (CI uses `--frozen-lockfile`) and `jsdom`
  is missing.
- **`FL_STATUTE`** points at the 2023 statutes edition — fixed in v1.D.
