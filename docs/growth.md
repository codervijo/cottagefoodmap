# Growth Log — cottagefoodmap.com

> **What this file is for:** an honest, append-only log of growth experiments
> on this site — what was tried, what was measured, what happened. The data
> source is GSC; this file narrates *why*. Future-you (or future-Claude)
> reads this when deciding what to try next, both on this site and on
> related sister sites.

## How to use this (workflow — re-read this when you forget)

**Add an entry whenever you do something growth-relevant.** That includes:
shipping new content, structural SEO changes (sitemap, schema, redirects,
internal linking), tech changes that affect crawl/indexing, marketing
pushes, backlink campaigns. *Not* every code commit — just things you'd
want to point at when GSC numbers move (or fail to).

**Each entry is a hypothesis you can be wrong about.** Commit to a
measurable KPI and an observation window before acting — otherwise "did
this work?" is just a feeling.

### Lifecycle of one entry

1. **Day of action** — append a new dated H2 with `Status: active`, the
   hypothesis, the KPI you'll watch, current baseline numbers, what you
   did, and the date to review (default: today + 28 days, matching GSC's
   reporting window).
2. **Review day** — pull current GSC numbers, compute delta vs baseline.
   Fill in **Result** and **Learning**. Set **Status** to `shipped` (worked,
   keep going), `failed` (didn't pay off, abandon), or extend the review
   another window if results are ambiguous.
3. **Never rewrite older entries.** Wrong hypotheses are the most valuable
   data — they tell you what NOT to repeat on the next site. Append, don't
   edit.

### Where to get the numbers

```bash
cd ~/work/projects/sites/portfolio && make run ARGS="gsc sync"
```

Then read the row for `cottagefoodmap.com`. Or pull from
https://search.google.com/search-console directly.

### Format

```
## YYYY-MM-DD — <one-line hypothesis or action>
- **Status:** active | testing | shipped | failed | abandoned
- **Hypothesis:** <what you're betting will work — only on initial / new-bet entries>
- **KPI:** <what GSC metric / query / page>
- **Baseline:** <numbers at start>
- **Action:** <what was done; 1-2 lines>
- **Result:** <numbers after window; "TBD — review YYYY-MM-DD" until then>
- **Learning:** <why it worked / didn't; what to try next; "TBD" until reviewed>
```

---

## 2026-06-09 — 9.
- **Status:** active
- **Hypothesis:** 9. Growth hypothesis
The high-volume generic head terms ("texas cottage food law") are increasingly answered inline by AI Overviews and dominated by .gov and nonprofits, but the long tail of specific, intent-rich sub-queries — cost, permit, per-product allowance, labeling, where-can-I-sell, across 50 states — is large, demand-confirmed in keyword data, weakly served by thin blogs and PDFs, and harder for an answer engine to fully satisfy. A dense, primary-sourced, freshness-maintained per-state matrix can capture that long tail within 6–12 months, compound as the data deepens, and defend its position precisely because the moat is maintained structured data rather than reproducible prose.
- **KPI:** any GSC traffic — clicks, impressions, indexed-page count
- **Baseline:** 0 clicks / 0 impressions (just deployed)
- **Action:** project scaffolded via `portfolio new bootstrap`; first deploy pending. After deploy: verify in GSC as `sc-domain:cottagefoodmap.com` and submit the sitemap.
- **Result:** TBD — review 2026-07-07
- **Learning:** TBD

## 2026-09-15 — Trailing-slash canonicals + answer-first guide titles
- **Status:** active
- **Hypothesis:** Guide pages already rank on page 1 but don't get clicks because the title only repeats the question. Putting the answer (plus permit/fee/cap) in the title and description lifts CTR. Separately, pointing canonicals and internal links at the final `/path/` URL merges the duplicate slash/no-slash URLs GSC reports, and gets `/foods/` indexed.
- **KPI:** site CTR; CTR on `/guides/sell/coffee-and-tea/{california,texas}/`; `/foods` coverage in GSC; no more duplicate `/states/<x>` vs `/states/<x>/` rows in the GSC page report.
- **Baseline (GSC 28d to 2026-09-12):** site 630 imp · 3 clicks · 0.5% CTR · avg pos 28.8. `coffee-and-tea/california/` 172 imp · 1 click · pos 8.7. `coffee-and-tea/texas/` 82 imp · 0 clicks · pos 9.9. `/foods` = "Page with redirect" (not indexed). `project check`: CHECK_161 — 48 canonicals 308.
- **Action:** `trailingSlash: 'always'`; canonicals and all internal links now end in `/`. "Can I sell X" titles end with Yes / Yes, with limits / No / Unclear, and descriptions add permit · fee · sales cap from the state data. License-cost titles include the cost. Also fixed the matcher: a food named on both lists was marked "prohibited", so CA/FL/NY/OH baked goods and OH coffee showed "No". It's now "restricted" ("Yes, with limits"), and the page lists the matched items with their sources.
- **Result:** TBD — review 2026-10-13
- **Learning:** TBD

## 2026-09-15 — v1.D: all 5 states re-verified against official sources
- **Status:** active
- **Hypothesis:** Correct, current, sourced answers are the site's only defensible edge. Fixing stale facts (Texas SB 541, California 2026 caps) and dead source links protects trust and should lift engagement on affected guide pages over time; wrong answers were a credibility risk regardless of traffic.
- **KPI:** GSC clicks and CTR on `/guides/sell/*/texas/` and `/states/texas/`; no regressions in indexed pages.
- **Baseline (GSC 28d to 2026-09-12):** site 630 imp · 3 clicks. `coffee-and-tea/texas/` 82 imp · 0 clicks · pos 9.9. `states/texas` 13 + 10 imp (slash/no-slash split).
- **Action:** Rewrote CA, FL, NY, OH, TX data from official sources (re-fetched and checked). Texas: cap $50,000 → $150,000, any food except 6 categories, new label disclosure, wholesale to vendors. CA: 2026 caps. FL: coffee/tea not on the FDACS list → "Unclear". NY/OH/TX: dead agency URLs replaced. Ohio honey → "Yes, with limits".
- **Result:** TBD — review 2026-10-13
- **Learning:** TBD

## 2026-09-25 — v2.B: 5 more states (PA, IL, GA, NC, MI), +50 pages
- **Status:** active
- **Hypothesis:** The same per-state template that already gets page-1 impressions for CA/TX guides will earn impressions for the 5 most populous uncovered states. Shipping 5 at a time (not 15) lets Google index each batch before the next.
- **KPI:** indexed count of the 50 new URLs (`lamill settings gsc recrawl`); site impressions and clicks; impressions on `/guides/*/{pennsylvania,illinois,georgia,north-carolina,michigan}/`.
- **Baseline (GSC 28d, 2026-08-26 → 2026-09-22):** site 1,090 imp · 9 clicks · 0.8% CTR · avg pos 24.0. New-state URLs: 0 (not yet published). Indexed: 61 of 63 sitemap URLs.
- **Action:** 5 state records researched from official sources (59 of 60 facts verified); 114 pages built. v2.C starts only after these pages are indexed.
- **Result:** TBD — review 2026-10-23
- **Learning:** TBD

## 2026-10-05 — v2.C: 5 more states (NJ, VA, WA, AZ, TN), +50 pages
- **Status:** active
- **Hypothesis:** Batch 2 earns impressions the way batch 1 did. v2.B pages picked up impressions within ~10 days of shipping, so the per-state template generalizes beyond the original 5 states.
- **KPI:** indexed count of the 50 new URLs (`lamill settings gsc recrawl`); site impressions and clicks; impressions on `/guides/*/{new-jersey,virginia,washington,arizona,tennessee}/`.
- **Baseline (GSC 28d, 2026-09-05 → 2026-10-02):** site 1,776 imp · 18 clicks · 1.0% CTR · avg pos 18.6. v2.B URLs: 31 with impressions, 168 imp · 1 click. v2.C URLs: 0 (not yet published). v2.B gate: 45 of 50 URLs crawled; 5 `/guides/sell/honey/<state>/` pages unknown to Google.
- **Action:** 5 state records researched from official sources (60 of 60 facts verified); 164 pages built. v2.D starts only after these pages are indexed.
- **Result:** TBD — review 2026-11-02
- **Learning:** TBD

## 2026-10-21 — v2.D: guide depth (cited Q&A, fee table, per-state food detail)
- **Status:** active
- **Hypothesis:** The 135 guide and food pages were thin (72–303 words, no sections, no FAQ). Answering the follow-up questions from the cited data (permit, fee, cap, channels, training, food-specific notes) makes them worth landing on. That should lift CTR on "can I sell" guides already ranking near page 1, move license-cost and labeling guides up, and get the 2 Virginia guides still "Discovered – currently not indexed" crawled.
- **KPI:** CTR and clicks on `/guides/sell/*`; avg position on `/guides/license-cost/*` and `/guides/labeling/*`; index status of `/guides/license-cost/virginia/` and `/guides/labeling/virginia/`.
- **Baseline (GSC 28d, 2026-09-21 → 2026-10-18; page rows, so totals differ slightly from the site row):** site 2,558 imp · 28 clicks · 1.1% CTR · avg pos 12.9. Can I sell: 120 URLs, 1,678 imp · 26 clicks · pos 7.8. License cost: 15 URLs, 114 imp · 0 clicks · pos 17.4. Labeling: 17 URLs, 53 imp · 0 clicks · pos 29.1. Food pages: 7 URLs, 51 imp · 0 clicks · pos 8.5. State pages: 15 URLs, 666 imp · 3 clicks · pos 24.4. v2.C gate: 48 of 50 URLs indexed.
- **Action:** Rebuilt the 3 guide templates and the food pages from cited statements (median words: can I sell 146 → 624, license cost 80 → 749, labeling 143 → 345, food pages 152 → 951); FAQPage on 127 guides; disclaimer cut to one line; all 16 food-status overrides now cited.
- **Result:** TBD — review 2026-11-18
- **Learning:** TBD
