# bugs.md — cottagefoodmap.com

Bug journal. The operator reports; Claude writes and maintains the entries. One H3 per bug with
a stable `BUG-NNN` ID (next ID = highest + 1). When a bug is fixed, move it to `## Fixed bugs`
and add a `**Fixed in**` line with the commit SHA and phase. Never delete an entry.

Fields: **Repro** · **Expected** · **Actual** · **Where** · **Severity**
(`blocker` / `major` / `minor` / `cosmetic`) · **Notes**.

## Open bugs

## Fixed bugs

### BUG-002 · 2026-09-22 — Florida shows out-of-state shipping as "Yes"

- **Repro:** open `/compare/` (Florida row) or `/states/florida/` (Sales channels).
- **Expected:** "No — not authorized". Fla. Stat. § 500.80(2) allows internet and mail-order
  sales and delivery by USPS or a commercial carrier, but it is a state exemption and can't
  authorize shipping to other states.
- **Actual:** "Out-of-state shipping: Yes" on both pages.
- **Where:** `src/data/states/florida.ts`, `sales_channels.value.online_out_of_state: true`.
  Both pages read this one record, so there is no drift between them. The value itself was wrong.
- **Severity:** blocker. Readers make legal decisions based on this value.
- **Notes:** Checked 2026-09-22. None of § 500.80, the FDACS Cottage Foods page, or the
  HB 663 staff analysis mentions interstate sales. The operator chose `false` over `null`
  because silence in a state exemption isn't permission, and "Not addressed" reads as permissive.
  A plain boolean can't carry that distinction, so channels are now a `ChannelStatus` with a
  third value, `"not_authorized"` (ADR-007). NY, OH, TX, and CA were already `false`.
- **Fixed in** — `81494f9` (BUG-002)

### BUG-001 · 2026-09-22 — California sales cap stores one tier; Class A is only in notes

- **Repro:** the reported symptom (`/states/california/` showing $150,000, "Cap raised to
  $150,000 effective 2023", verified 2025-09-20, cited to § 114365) is **not in the build**.
  It comes from the pre-v1.D `genai/src/data/states/california.ts` export, which isn't built or
  served. Live `/states/california/` and `/compare/` both showed $177,756, and neither
  `pages.dev` nor `http://` serves an older copy (checked 2026-09-22).
- **Expected:** both classes stored as data, each with base, adjusted amount, effective date,
  source, and verified date, and both shown wherever the cap is shown.
- **Actual:** `sales_cap_usd_annual` was a single number (Class B, $177,756). Class A ($88,878)
  and the base amounts appeared only in `notes`. Compare showed only Class B, which is why the
  page looked wrong.
- **Where:** `src/data/schema.ts`, `src/data/states/california.ts`, and every cap renderer.
- **Severity:** major.
- **Notes:** Re-verified 2026-09-22 against the CDPH "CFO Adjusted Gross Annual Sales Limit"
  PDF, effective January 1, 2026: Class A $88,878 and Class B $177,756, from bases of $75,000 and
  $150,000 in HSC § 113758. `adjusted_usd` goes stale every January; it is the first target
  for v4 change detection.
- **Fixed in** — `81494f9` (BUG-001)
