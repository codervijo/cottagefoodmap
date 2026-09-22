---
project: cottagefoodmap.com
prd_version: 2
project_version: v1.B
status: active
owner: Vijo
last_updated: 2026-09-22
---

# cottagefoodmap.com — PRD

## 1. Problem

People who want to sell baked goods, jams, or candy from a home kitchen hit the same wall:
cottage food rules differ in every state, official .gov pages are dense and incomplete, and a
search returns a generic summary that doesn't answer "can I sell this here, and what will it
cost me." cottagefoodmap.com answers those specific questions per state — license cost, permits,
allowed and prohibited foods, labeling, sales channels — with every fact cited to a primary
source and dated. The defensible asset is the maintained, cited, structured data, not the prose.

## 2. Users

Aspiring and active home-based food sellers in the US. Core user: an individual with a real
product (baked goods, jams, canned goods, candy), no legal background, and a low budget, who has a
concrete trigger — a farmers market, Instagram orders, scaling a hobby — and is anxious about
selling legally without hiring a lawyer. They search narrow questions ("cottage food license cost
in Texas", "can I sell from home in Ohio") and want a fast, plain-English, sourced answer for
their state. Audience size: not yet sized.

## 3. Goals & non-goals

**Goals:**
- Be the most trusted per-state reference for US cottage food rules: every fact cited to a
  primary source and dated, or explicitly marked `Unverified` — never guessed.
- Capture the long tail of specific per-state queries (cost, permit, per-food allowance,
  labeling, where-to-sell) that generic answers don't fully satisfy.
- Grow coverage in steps that keep the data standard: 5 states (v1) → 20 (v2) → 50 (v3), then
  make freshness automatic (v4), then add automated fact-correctness checks (v5).
- Count toward the sites/* workspace goal of 30 commercial sites with SEO traffic.

**Non-goals:**
- Legal advice — the site is an informational reference that points to the official agency.
- Email capture, affiliate, lead-gen, or a paid toolkit — not on the v1–v5 roadmap.
- Chasing the generic "[state] cottage food law" head terms.
- Automated freshness tooling before v4.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.
- `vN.A` = always the planning phase for version N; build phases start at `vN.B`.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | 5 states, trustworthy and fresh | CA, FL, NY, OH, TX live; every fact re-verified against its primary source (or marked `Unverified`); no known wrong answers; unknown URLs return a real 404; CI green; a sourced legislative change tracker (enacted and pending) for the 5 states |
| v2 | 20 states | 15 more states at the v1 data standard |
| v3 | all 50 states | remaining 30 states at the v1 data standard |
| v4 | freshness | stale facts flagged automatically; source changes detected on a schedule; freshness exposed to search engines; public changelog of verified changes |
| v5 | fact-correctness checks | unit tests that catch wrong or inconsistent facts before they ship (e.g. contradictions between fields, allowed/prohibited conflicts, answers that don't match the data), run in CI |

## 5. Phases

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | plan v1 | this PRD: problem, users, goals, v1–v5 roadmap; open decisions assigned to the phase that needs them (§6) | ✅ |
| **v1.B** | Astro port + SEO baseline | TanStack Start → Astro static (`181289c`); 63 prerendered pages (5 states × state, license-cost, labeling, 7 food guides; food categories; compare); trailing-slash canonicals + internal links; answer-first guide titles/descriptions; food-status matcher fix — category on both lists is "restricted", not "prohibited" (`82e94eb`) | ✅ |
| **v1.C** | CI green | commit `pnpm-lock.yaml` (CI runs `--frozen-lockfile`); vitest environment `jsdom` → `node` (no DOM tests; `jsdom` was never installed); CI passes on push (`e3a28ae`) | ✅ |
| **v1.D** | re-verification pass | all 60 facts (5 states × 12) re-checked against primary sources; values corrected, `last_verified` updated only after a real check; unconfirmable facts → `Unverified`; stale source URLs fixed (e.g. `FL_STATUTE` pinned to the 2023 edition). Done 2026-09-15: all 5 states rewritten from official sources; TX updated for SB 541 (cap $150,000, any food except 6 categories, new label disclosure, wholesale to vendors); CA 2026 CPI caps ($88,878 / $177,756); dead source URLs replaced (NY, OH, TX agency pages); unsourced figures removed; sales channels an official source doesn't address shown as "Not addressed" | ✅ |
| **v1.E** | unknown URL handling | unknown URLs return HTTP 404 with a `404.astro` page (links to states, foods, guides) instead of 200 + home page; replace `not_found_handling: "single-page-application"` in `wrangler.jsonc`; verified live 2026-09-15 (`081190c`) | ✅ |
| **v1.F** | conformance + SEO gaps | `og:image`; analytics (no data on CTR changes without it); home `<title>` under 60 chars; `tsconfig.json`; rename git remote to the full domain (CHECK_040); BreadcrumbList schema | planned |
| **v1.G** | change data model | `LawChange` dataset under `src/data/changes/` reusing `Fact<>` (instrument, status, effective date, summary, field changes with from → to); stable per-fact anchors on state pages from one `FACT_ANCHORS` map (`#fact-<field>`); drift test: newest effective change per field must match the current `StateLaw` value; test that all 63 baseline sitemap URLs still resolve | planned |
| **v1.H** | legislative research | history of each state's cottage food law, from its origin to the present, plus pending bills, for CA, FL, NY, OH, TX; primary sources only (bill text, statute, session law, agency notice, register); unsourceable items go in a gap log in `docs/changes-research.md`, not into the data; operator reviews | planned |
| **v1.I** | change pages + linking | `/changes/` (all states, newest first, filter by state and year, pending bills marked "Not law"); `/changes/<state>/`; "Changes" in the main nav; home "Recent law changes" module; state-page "Recent changes" module with 2–3 entries inline; each entry deep-links to the fact it changed; new pages in the sitemap; no existing URL moves | planned |
| **v1.J** | feed, JSON, structured data | `/changes/feed.xml` (Atom); `/changes.json` with schema version and license; `Dataset` JSON-LD on `/changes/`, `Legislation` per entry, BreadcrumbList | planned |
| **v1.K** | link-audit fixes *(optional)* | state pages link to their 7 "can I sell" guides; those guides currently have 1 in-content inbound link each | planned |
| **v2.A** | plan v2 | resolve the v2 open questions in §6; define v2 build phases | planned |
| **v3.A** | plan v3 | resolve the v3 open questions in §6; define v3 build phases | planned |
| **v4.A** | plan v4 | resolve the v4 open questions in §6; define v4 build phases | planned |
| **v5.A** | plan v5 | resolve the v5 open questions in §6; define v5 build phases | planned |
| **v5.B** | food-status data | replace text matching with explicit per-category status + source in each `StateLaw` (tracked refactor: matches are loose, e.g. FL "dried goods" is "with limits" because dried meat is prohibited) | planned |
| **v5.C** | head-tag consolidation | one head component: `Layout.astro` and `Seo.astro` both emit `og:type`; `index.astro` hand-writes its own head (tracked refactor) | planned |

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
- **v1.D** — Re-verification method: operator verifies each fact, or Claude drafts from the source and the operator approves? — *answered 2026-09-15:* Claude researched each state from official sources, re-fetched and checked every key quote before editing, and the operator reviews the diff.
- **v1.D** — "Unclear" food statuses (honey in NY/OH/TX, coffee & tea in NY): research and add explicit data, or leave as unclear? — *answered 2026-09-15:* researched. TX allows any food except 6 categories (honey, coffee, tea allowed). OH: only flavored honey from exempt beekeepers ("Yes, with limits"); coffee and dry tea blends allowed. NY: honey is under a separate exemption (stays unclear, with reason); beverages and coffee roasting prohibited. FL: coffee and tea are not on the FDACS list (now unclear).
- **v1.G** — Approve the `LawChange` shape, the separate-dataset-plus-drift-test approach, and the `#fact-<field>` anchor scheme (proposed 2026-09-22).
- **v1.G** — Scope: the tracker records changes to the law only; this site's own data corrections belong in v4's changelog. Confirm.
- **v1.J** — License for `/changes.json`: CC BY 4.0, CC BY-NC 4.0, or all rights reserved?
- **v2** — Which 15 states to add, and by what criterion (GSC impressions, keyword demand, population, law clarity)?
- **v2** — Per-state sourcing workflow: how a new state gets researched, cited, and reviewed.
- **v2** — Does the 7-category food list or the `StateLaw` schema need to change to fit new states?
- **v3** — Scope of "all 50": include DC and territories?
- **v3** — How to model states with no statewide cottage food law, or with local-only rules.
- **v3** — Compare view at 50 states: layout and filtering.
- **v4** — Fetch-hostile official sources the watcher must handle: cdph.ca.gov (incomplete TLS chain), agriculture.ny.gov (403 to non-browser clients), statutes.capitol.texas.gov (JS-only; use tcss.legis.texas.gov), agri.ohio.gov (404s some non-browser requests).
- **v4** — Texas publishes a CPI-adjusted sales cap annually but none was found on official sources (2026-09-15); the site shows the statutory $150,000. Where should the watcher look?
- **v4** — First change-detection target: California `SalesCapTier.adjusted_usd` (CPI-adjusted
  every January 1; CDPH publishes a new "Adjusted Gross Annual Sales Limit" PDF). Flag once
  `effective` is more than a year old. (Operator, 2026-09-22.)
- **v4** — Staleness threshold: 90, 180, or 365 days?
- **v4** — Where the source watcher runs: GitHub Actions cron in this repo, or a fleet-wide `portfolio`/`lamill` command?
- **v4** — Staleness report in the build: warn only, or fail?
- **v4** — Re-verify workflow once facts are flagged: who confirms, and how the diff is presented.
- **v4** — Changelog granularity: per-fact value changes only, or also source/URL changes?
- **v4** — `lastmod` / `dateModified` source: newest `last_verified` among the facts on each page?
- **v5** — Which correctness checks: cross-field consistency (e.g. `permit_required: false` with a license fee), food on both allowed and prohibited lists, rendered answer vs. data, source URLs on official domains, valid/non-future `last_verified` dates — which matter most?
- **v5** — Where checks run: on the data layer (`src/data/`), on built HTML (`dist/`), or both?
- **v5** — On a failed check: block the build, or report and ship?
