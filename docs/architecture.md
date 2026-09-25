# Architecture — cottagefoodmap.com

Status as of v2.B (2026-09-25). Roadmap and phases live in `docs/prd.md`.

## 1. Overview

A fully static Astro site. All content is generated at build time from typed state-law data in
`src/data/`; there is no server runtime, database, or CMS. Every factual field carries its own
source URL and verification date, and pages render those citations inline. Output is 114
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
| `src/data/states/<state>.ts` | One `StateLaw` record per state, 12 facts each, checked against official sources listed in `sources`: CA, FL, NY, OH, TX (re-verified 2026-09-15, v1.D); PA, IL, GA, NC, MI (2026-09-25, v2.B) |
| `src/data/states/index.ts` | `STATES` (sorted by name), `STATES_BY_SLUG`, `getState` |
| `src/data/foods.ts` | 7 `FoodCategory` entries with substring `match` terms; `foodMatches`, `statusForFood`, `STATUS_ANSWER` |
| `src/data/format.ts` | Shared display strings: `channelLabel` (Yes / No / No — not authorized / Not addressed), `capLabel` (all tiers), `capAmounts` |
| `src/data/phrases.ts` | Short data-derived phrases for titles/descriptions (`permitPhrase`, `costPhrase`, `costTitle`, `capPhrase`, `joinPhrases`); unverified facts return `null` |
| `src/layouts/Layout.astro` | HTML shell, header nav, footer disclaimer, site-wide `WebSite` JSON-LD, `og:image` (`/og.png`), GA4 (only when `PUBLIC_GA_ID` is set at build) |
| `src/components/Seo.astro` | Per-page `<title>`, description, canonical (forced trailing slash), Open Graph, BreadcrumbList JSON-LD (Home › section index › page; `crumb` prop names the page) |
| `src/components/StateDetail.tsx` | React: full state page body (rendered to static HTML) |
| `src/components/StatesList.tsx` | React island (`client:load`) on `/states/` — client-side filtering |
| `src/components/Fact.tsx` | React: renders one `Fact<T>` with source link and verified date |
| `src/components/Disclaimer.astro` / `.tsx` | "Not legal advice" notice |
| `src/pages/` | Routes — see §4 |
| `src/__tests__/` | Vitest: `seo.test.js`, `trailing-slash.test.js`, `foods.test.ts`, `smoke.test.js`, `built-head.test.js` (reads `dist/`; run after build) |
| `genai/` | Original Lovable/TanStack Start export the Astro port was translated from (v1.B). Reference only; not built |
| `public/` | `_headers` (cache + security headers), `robots.txt`, `favicon.svg`, IndexNow key file |

## 3. Data model

- **`Fact<T>`** — `{ value, source_url, source_title?, last_verified, notes? }` or `{ unverified: true, note? }`.
  `source_url` must be an official source (state .gov, statute, official PDF). Unverified facts
  render as gaps; nothing is guessed.
- **`StateLaw`** fields (12 facts): `program_name`, `agency`, `permit_required`, `permit_details`,
  `license_cost_usd` (`number | "varies" | "none"`), `sales_cap_usd_annual`
  (`number | "none" | SalesCapTier[]`),
  `allowed_foods`, `prohibited_foods`, `labeling_requirements`, `sales_channels`,
  `training_required`, `inspection_required`. Plus non-fact `caveats`, `sources`, `last_reviewed`.
- **`sales_channels`** values are `ChannelStatus` = `boolean | null | "not_authorized"`. `null` =
  the official source doesn't address that channel ("Not addressed"). `"not_authorized"` = outside
  what the state law can authorize, e.g. interstate shipping under an in-state exemption
  ("No — not authorized").
- **`SalesCapTier`** — for tiered caps (California Class A / B): `class`, `base_usd`,
  `adjusted_usd`, `effective`, plus its own `source_url` / `last_verified`. The enclosing Fact
  cites the statute that sets the tiers. Every tier is shown wherever the cap is shown.
- **`allows_all_except_prohibited`** (optional) — the law allows any food except the prohibited
  list (Texas since SB 541). A food with no prohibited match is then `allowed`.
- **`food_status_overrides`** (optional, keyed by food slug) — explicit status plus a `reason`
  restating the source, for cases list matching can't express (e.g. Ohio lists only *flavored*
  honey). The reason is shown on the guide page.
- **Food status** is derived. `statusForFood`: override if present; else `foodMatches` returns
  the state's allowed/prohibited list items containing a category `match` term at a word start
  (`pie` matches "pies", not "Krispies"). Both lists match → `restricted`; prohibited only →
  `prohibited`; allowed only (or all-except state) → `allowed`; neither → `unclear`.

## 4. Page generation

| Route | Source | Count |
|---|---|---|
| `/` | `pages/index.astro` (own head tags, not `Seo.astro`) | 1 |
| `/states/`, `/states/<state>/` | `pages/states/` | 1 + 10 |
| `/compare/` | `pages/compare.astro` | 1 |
| `/foods/`, `/foods/<food>/` | `pages/foods/` | 1 + 7 |
| `/guides/` | `pages/guides/index.astro` | 1 |
| `/guides/license-cost/<state>/` | title/description include the cost answer | 10 |
| `/guides/labeling/<state>/` | | 10 |
| `/guides/sell/<food>/<state>/` | title ends with `STATUS_ANSWER`; description adds permit · fee · cap; lists matched items with sources | 70 |
| `/about/` | | 1 |
| `404.html` | `pages/404.astro` — noindex, not in sitemap | 1 |

URL policy: every page URL, canonical, and internal link ends in `/` (`trailingSlash: 'always'`);
Cloudflare 308s the slashless form. Enforced by `trailing-slash.test.js`.

## 5. Build, test, deploy

- **Build:** `pnpm build` → `astro build` → `dist/` (directory format) + `@astrojs/sitemap`.
  Runs inside the `sites1` docker image (Node 22); the host Node is too old.
- **Test:** `pnpm test` → Vitest, `environment: 'node'` (no DOM tests).
- **CI:** `.github/workflows/ci.yml` — `pnpm install --frozen-lockfile`, build, test on push/PR.
- **Deploy:** push to `main` → Cloudflare Git integration builds and deploys (observed live
  ~30s after push on 2026-09-15). The site is served by Cloudflare Pages (`cottagefoodmap.pages.dev`).
- **404s:** `src/pages/404.astro` → `dist/404.html` (noindex). Pages serves it with HTTP 404 for
  unknown URLs; without it Pages falls back to SPA mode (200 + home page for every URL).
  `wrangler.jsonc` sets `not_found_handling: "404-page"` to match.

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
- **ADR-005 (v1.E) — Real 404s.** Unknown URLs must return HTTP 404, not the home page with 200,
  so search engines don't index junk URLs as duplicates of `/`.
- **ADR-006 (v1.D) — Unaddressed is not no.** When an official source is silent on a sales
  channel, the value is `null` ("Not addressed") rather than an inferred yes/no; figures without
  an official source (e.g. fee ranges, course prices) were removed rather than kept as notes.

- **ADR-007 (BUG-001/002) — Scope limits and tiers are data, not notes.** A state exemption can't
  authorize out-of-state sales, and "Not addressed" reads as permissive, so the channel status
  has a third value, `not_authorized`. Tiered caps are stored per tier, not as one number plus
  prose, because showing only the top tier made California's cap look wrong.

- **ADR-008 (v2.B) — Record what the official source says, and nothing more.** Four v2.B calls
  follow from this:
  - **Georgia training = required.** GDA's current Cottage Food page says operators "must
    complete an American National Standards Institute (ANSI) accredited food safety training
    program." HB 398 is silent on training; the note says so rather than overriding the agency.
  - **North Carolina permit = No, inspection = Yes.** NCDA&CS says "A permit is not issued"; the
    required pre-sale kitchen inspection is carried by `inspection_required` and the notes, not by
    reinterpreting "permit".
  - **Out-of-state online sales: Pennsylvania = Yes, North Carolina = Not addressed.** ADR-007's
    `not_authorized` is for in-state exemptions. PA and NC are inspected registrations, not
    exemptions; PDA explicitly addresses out-of-state and internet sales, NC's sources are silent.
  - **Georgia honey = Unclear.** GDA's FAQ says honey is "not considered cottage foods" and refers
    producers to its Food Safety Division — regulated elsewhere, not banned. Same treatment as
    New York honey (separate exemption → Unclear, with reason).

## 7. Tracked refactors

- **Text-based food matching.** Status still depends on list wording. v1.D narrowed matching to
  word starts and added `food_status_overrides`, but matches can still be loose (e.g. FL "dried
  goods" is "with limits" because "dried meat" is prohibited). Candidate fix: store explicit
  per-category status with a source in each `StateLaw`, and have v5 checks compare it with the
  list text.
- **Duplicate head tags.** `Layout.astro` emits site-level `og:type`/`og:site_name`/`twitter:card`
  and `Seo.astro` emits per-page `og:type`; `index.astro` hand-writes its own head instead of
  using `Seo.astro`. Consolidate into one head component.

## 8. Known issues

- **Hard-to-fetch official sources** (relevant to the v4 source watcher): cdph.ca.gov serves an
  incomplete TLS certificate chain (strict clients fail); agriculture.ny.gov returns 403 to
  non-browser clients for PDFs and forms; statutes.capitol.texas.gov is a JavaScript shell (use
  tcss.legis.texas.gov for text); agri.ohio.gov 404s some non-browser requests. Added in v2.B: ilga.gov serves an incomplete TLS chain; rules.sos.ga.gov returns 403 to curl; legis.ga.gov and palegis.us statute pages are JavaScript shells (use the PDF views).
- **Texas sales cap** is CPI-U adjusted by DSHS annually; no adjusted figure was published on the
  official sources checked 2026-09-15, so the site shows the statutory $150,000.
