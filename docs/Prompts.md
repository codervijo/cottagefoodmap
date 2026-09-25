# Prompt History — cottagefoodmap.com

<!-- Append new prompts at the bottom, newest last. Format:

## YYYY-MM-DD [optional title]
> <prompt text or short summary>

The dated H2 (`## YYYY-MM-DD`) is what `portfolio project check` parses
to surface "last AI prompt" per project. Keep entries append-only.
-->

## 2026-06-09 — scaffolded via portfolio new bootstrap

> Created project skeleton. Stack chosen, scaffolding written, git initialized.

## 2026-09-15 — trailing-slash canonicals + answer-first guide titles

> Suggest SEO improvements from `lamill project seo --refresh` + GSC query/page data; then "do 1 and 2": (1) fix trailing slashes (48 canonicals 308, `/foods` "Page with redirect", duplicate slash/no-slash URLs in GSC); (2) put the answer in guide page titles/descriptions. Found and fixed the food-status matcher showing "No" for baked goods in CA/FL/NY/OH and coffee in OH; added the "restricted" status. Tests: `trailing-slash.test.js`, `foods.test.ts`. Growth entry logged.

## 2026-09-15 — v1.A: PRD roadmap + architecture doc

> Plan the PRD: v1 = 5 states, trustworthy and fresh; v2 = 20 states; v3 = all 50 states; v4 = freshness (all automation moved here); v5 = fact-correctness checks. Every vN.A is that version's planning phase; work phases in order. Open decisions filed in §6 under the phase that needs them. v1.A marked done. Added `docs/architecture.md`: module map, data model, page generation, ADR-001–004, tracked refactors (substring food matching, duplicate head tags), known issues (soft 404s, CI red until v1.C, FL statute URL).

## 2026-09-15 — v1.C, v1.D, v1.E

> "push and do v1.C, v1.D and v1.E - all permissions granted till then". v1.C: tracked `pnpm-lock.yaml`, vitest env `jsdom` → `node`; first green CI (`e3a28ae`). v1.E: `src/pages/404.astro` + `not_found_handling: "404-page"`; unknown URLs verified 404 live (`081190c`). v1.D: 5 parallel research agents checked every fact against official sources; key quotes re-fetched and checked before editing. Rewrote all 5 state files (TX SB 541, CA 2026 caps, dead NY/OH/TX URLs, unsourced ranges removed). Schema: nullable sales channels ("Not addressed"), `allows_all_except_prohibited`, `food_status_overrides`; matcher now matches at word starts.

## 2026-09-22 — BUG-001 / BUG-002: CA cap tiers, FL out-of-state shipping

> Operator reported two live errors: FL "Out-of-state shipping: Yes" and a CA state page stuck at $150,000 while compare showed $177,756. Findings: compare and the state pages share one data source; the CA report came from the pre-v1.D `genai/` export and isn't served. Operator decisions: FL → `not_authorized` (new third `ChannelStatus` value, "No — not authorized"); CA → per-tier `SalesCapTier` with its own source and verified date, and compare shows every tier. CA caps re-verified against the CDPH 2026 PDF. New `docs/bugs.md`, ADR-007, v4 open question for CPI change detection.

## 2026-09-22 — v1.G–v1.K planned; v1.F started

> Legislative change tracker requested; per the new global rule (new feature → place in PRD first), it was slotted as v1.G–v1.K after v1.F (option A). "commit and start v1.F": og:image, home title < 60, tsconfig.json, BreadcrumbList, env-gated GA4. Waiting on the operator: GA4 measurement ID, GitHub repo rename (CHECK_040).

## 2026-09-22 — v1.F partial, pushed; session paused

> Home description no longer claims "every U.S. state" (count from `STATES.length`). v1.F committed (`fdf1217`) and pushed. Remaining v1.F items are in prd.md §6: the GA4 measurement ID and CF env var, and the GitHub repo rename (CHECK_040). Next after v1.F: v1.G (its open questions are also in §6).

## 2026-09-25 — v1 closed; change tracker moved to v4

> "move rest of v1.f till v1.k into v4 or v5". v1.F marked done with its shipped scope; the GA4 ID + repo rename became v4.B; the change tracker (v1.G–v1.J) became v4.C–v4.F, and the link audit (v1.K) became v4.G. v1 acceptance no longer includes the tracker; v4 acceptance does. Open questions relabeled. Next: v2.A (more states). Earlier the same day: live-site + GSC check of v1.F — 4 of 63 URLs recrawled since the deploy, 2 unknown to Google.

## 2026-09-25 — v2.A: 15 states picked, v2 split into 3 batches

> "do v2.A - you pick 15 states and plan rest of v2 work", then "split v2 into phases of 5 states each so google has time to digest it". Ahrefs had 0 API units and GSC (90d, 136 queries) had no queries for uncovered states, so states were ranked by Census 2024 population. v2.B PA IL GA NC MI; v2.C NJ VA WA AZ TN; v2.D MA IN MD MO WI; each later batch waits until the previous batch is indexed. v2 open questions answered in §6.

## 2026-09-25 — v2.B: PA, IL, GA, NC, MI

> "commit and start v2.B". One research agent per state, official sources only, quote logs in the session scratchpad. Fees/caps re-checked independently against PA statute, ILCS, MCL, GA HB 398 FAQ, NCDA&CS page. Added an IL dried-goods override (dehydrated tomato/melon prohibited). 114 pages, tsc + 38 tests green. Awaiting operator review before commit.
