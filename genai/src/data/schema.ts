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
  allowed_foods: Fact<string[]>;
  prohibited_foods: Fact<string[]>;
  labeling_requirements: Fact<string[]>;
  sales_channels: Fact<{
    in_person: boolean;
    farmers_market: boolean;
    online_in_state: boolean;
    online_out_of_state: boolean;
    delivery_in_state: boolean;
    retail_resale: boolean;
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
