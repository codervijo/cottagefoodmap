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
