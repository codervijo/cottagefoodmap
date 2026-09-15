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

export interface StateLaw {
  slug: string;             // e.g. "texas"
  name: string;             // "Texas"
  abbreviation: string;     // "TX"
  program_name: Fact<string>;
  agency: Fact<string>;
  permit_required: Fact<boolean>;
  permit_details: Fact<string>;
  license_cost_usd: Fact<number | "varies" | "none">;
  sales_cap_usd_annual: Fact<number | "none">;
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
  // null = the official source doesn't address this channel (shown as "Not addressed").
  sales_channels: Fact<{
    in_person: boolean | null;
    farmers_market: boolean | null;
    online_in_state: boolean | null;
    online_out_of_state: boolean | null;
    delivery_in_state: boolean | null;
    retail_resale: boolean | null;
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
