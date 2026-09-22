// Strict schema for cottage food law data.
// Every factual field is a Fact<T> requiring a source_url and last_verified date,
// OR an Unverified marker so the UI can flag the gap instead of guessing.

export type Unverified = { unverified: true; note?: string };

export type Fact<T> = {
  value: T;
  source_url: string;       // must be official: state .gov, statute, or official PDF
  source_title?: string;
  last_verified: string;    // ISO date YYYY-MM-DD
  notes?: string;
} | Unverified;

export type Source = {
  title: string;
  url: string;
  type: "statute" | "regulation" | "agency_page" | "official_pdf" | "guidance";
};

// null = the official source doesn't address the channel ("Not addressed").
// "not_authorized" = outside what the state law can authorize, e.g. shipping to other states
// under a state exemption that only reaches in-state sales ("No — not authorized").
export type ChannelStatus = boolean | null | "not_authorized";

// One sales-cap tier (e.g. California Class A / Class B). adjusted_usd is the figure in force
// from `effective`; it changes when the state re-indexes the cap, so each tier carries its
// own source and verification date.
export type SalesCapTier = {
  class: string;            // "Class A"
  base_usd: number;         // statutory base amount
  adjusted_usd: number;     // current adjusted amount
  effective: string;        // ISO date the adjusted amount took effect
  source_url: string;
  source_title?: string;
  last_verified: string;    // ISO date YYYY-MM-DD
};

export interface StateLaw {
  slug: string;             // e.g. "texas"
  name: string;             // "Texas"
  abbreviation: string;     // "TX"
  program_name: Fact<string>;
  agency: Fact<string>;
  permit_required: Fact<boolean>;
  permit_details: Fact<string>;
  license_cost_usd: Fact<number | "varies" | "none">;
  sales_cap_usd_annual: Fact<number | "none" | SalesCapTier[]>;
  sales_cap_notes?: Fact<string>;
  // true when the law allows any food except those listed as prohibited (e.g. Texas
  // after SB 541); allowed_foods then holds that rule as stated by the source.
  allows_all_except_prohibited?: boolean;
  // Per food-category status when list matching can't express the source (keyed by
  // FoodCategory slug). `reason` must restate what the cited source says.
  food_status_overrides?: Record<string, { status: "allowed" | "restricted" | "prohibited" | "unclear"; reason: string }>;
  allowed_foods: Fact<string[]>;
  prohibited_foods: Fact<string[]>;
  labeling_requirements: Fact<string[]>;
  sales_channels: Fact<{
    in_person: ChannelStatus;
    farmers_market: ChannelStatus;
    online_in_state: ChannelStatus;
    online_out_of_state: ChannelStatus;
    delivery_in_state: ChannelStatus;
    retail_resale: ChannelStatus;
    notes?: string;
  }>;
  training_required: Fact<boolean>;
  inspection_required: Fact<boolean>;
  caveats: string[];        // editorial caveats, not factual claims
  sources: Source[];
  last_reviewed: string;    // ISO date
}

export const isUnverified = <T,>(f: Fact<T>): f is Unverified =>
  (f as Unverified).unverified === true;
