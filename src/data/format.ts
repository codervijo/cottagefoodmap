// Display strings shared by the compare table, state pages, and state list, so one value
// renders the same everywhere.

import type { ChannelStatus, SalesCapTier } from "./schema";

export function channelLabel(v: ChannelStatus): string {
  if (v === null) return "Not addressed";
  if (v === "not_authorized") return "No — not authorized";
  return v ? "Yes" : "No";
}

export const isTiered = (v: number | "none" | SalesCapTier[]): v is SalesCapTier[] => Array.isArray(v);

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

// Every tier is shown; showing only the highest reads as a single (wrong) cap.
export function capLabel(v: number | "none" | SalesCapTier[]): string {
  if (v === "none") return "No cap";
  if (isTiered(v)) return v.map((t) => `${t.class} ${usd(t.adjusted_usd)}`).join(" · ");
  return usd(v);
}

// Cap amounts in force, for numeric filters.
export function capAmounts(v: number | SalesCapTier[]): number[] {
  return isTiered(v) ? v.map((t) => t.adjusted_usd) : [v];
}
