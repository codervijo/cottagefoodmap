// Short, data-derived phrases for titles and meta descriptions.
// Every phrase comes from a verified Fact; unverified fields return null
// so callers drop them instead of guessing.

import type { StateLaw } from "./schema";
import { isUnverified } from "./schema";
import { isTiered } from "./format";

export function permitPhrase(state: StateLaw): string | null {
  const f = state.permit_required;
  if (isUnverified(f)) return null;
  return f.value ? "state permit or registration required" : "no state permit";
}

export function costPhrase(state: StateLaw): string | null {
  const f = state.license_cost_usd;
  if (isUnverified(f)) return null;
  if (f.value === "none") return "no state fee";
  if (f.value === "varies") return "fees set locally";
  if (f.value === 0) return "free to apply";
  return `$${f.value.toLocaleString("en-US")} fee`;
}

// Title-case variant for the license-cost guide title.
export function costTitle(state: StateLaw): string | null {
  const f = state.license_cost_usd;
  if (isUnverified(f)) return null;
  if (f.value === "none") return "No State Fee";
  if (f.value === "varies") return "Varies Locally";
  if (f.value === 0) return "Free";
  return `$${f.value.toLocaleString("en-US")}`;
}

export function capPhrase(state: StateLaw): string | null {
  const f = state.sales_cap_usd_annual;
  if (isUnverified(f)) return null;
  if (f.value === "none") return "no sales cap";
  if (isTiered(f.value)) {
    return `sales caps ${f.value.map((t) => `$${t.adjusted_usd.toLocaleString("en-US")} (${t.class})`).join(" / ")}/yr`;
  }
  return `$${f.value.toLocaleString("en-US")}/yr sales cap`;
}

export function joinPhrases(parts: (string | null)[]): string {
  const s = parts.filter(Boolean).join(" · ");
  return s ? s.charAt(0).toUpperCase() + s.slice(1) + "." : "";
}
