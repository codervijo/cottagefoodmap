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
