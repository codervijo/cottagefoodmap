import type { StateLaw } from "../schema";

const CA_AGENCY = "https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/CottageFoodOperations.aspx";
const CA_STATUTE = "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=114365";

export const california: StateLaw = {
  slug: "california",
  name: "California",
  abbreviation: "CA",
  program_name: { value: "Cottage Food Operation (CFO)", source_url: CA_AGENCY, source_title: "CDPH — Cottage Food Operations", last_verified: "2025-09-20" },
  agency: { value: "California Department of Public Health (CDPH) — local environmental health agency administers", source_url: CA_AGENCY, last_verified: "2025-09-20" },
  permit_required: { value: true, source_url: CA_AGENCY, last_verified: "2025-09-20", notes: "Class A (direct sales only) registration or Class B permit (direct + indirect)." },
  permit_details: { value: "Two tiers: Class A — registration with the local environmental health agency for direct sales only. Class B — permit with annual home inspection for direct and indirect sales (e.g., to retail).", source_url: CA_AGENCY, last_verified: "2025-09-20" },
  license_cost_usd: { value: "varies", source_url: CA_AGENCY, last_verified: "2025-09-20", notes: "Set by each county; commonly $75–$200 for Class A and $150–$350 for Class B." },
  sales_cap_usd_annual: { value: 150000, source_url: CA_STATUTE, source_title: "Cal. Health & Safety Code § 114365", last_verified: "2025-09-20", notes: "Cap raised to $150,000 effective 2023." },
  allowed_foods: {
    value: [
      "Baked goods without cream, custard, or meat fillings",
      "Candy (e.g., chocolate, toffee)",
      "Jams, jellies, preserves, and fruit butters",
      "Dried fruit, dried pasta, dry baking mixes",
      "Granola, cereals, trail mixes",
      "Roasted coffee, dried tea",
      "Honey and sweet sorghum",
      "Vinegar and mustard",
      "Popcorn, nuts and nut mixes",
    ],
    source_url: CA_AGENCY,
    source_title: "CDPH — CFO Approved Foods List",
    last_verified: "2025-09-20",
  },
  prohibited_foods: {
    value: [
      "Any potentially hazardous (TCS) food",
      "Meat, poultry, fish, shellfish",
      "Dairy-based products (other than as ingredient in baked goods)",
      "Cream- or custard-filled baked goods",
      "Garlic-in-oil, salsa, canned vegetables",
    ],
    source_url: CA_AGENCY,
    last_verified: "2025-09-20",
  },
  labeling_requirements: {
    value: [
      "\"Made in a Home Kitchen\" statement in 12-pt type",
      "Name of the cottage food operation",
      "CFO registration or permit number",
      "Common name of the product",
      "Ingredient list in descending order by weight",
      "Net quantity",
      "Allergen disclosure",
    ],
    source_url: CA_AGENCY,
    last_verified: "2025-09-20",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: true,
      notes: "Class B required for sales to retail stores or restaurants. Out-of-state sales are not authorized.",
    },
    source_url: CA_AGENCY,
    last_verified: "2025-09-20",
  },
  training_required: { value: true, source_url: CA_AGENCY, last_verified: "2025-09-20", notes: "Food processor course required within 3 months of registration." },
  inspection_required: { value: true, source_url: CA_AGENCY, last_verified: "2025-09-20", notes: "Annual home inspection required for Class B; complaint-based for Class A." },
  caveats: [
    "Local environmental health departments administer registration/permits; fees and forms vary by county.",
    "Microenterprise Home Kitchen Operations (MEHKO) is a separate, county-opt-in program with broader allowances.",
  ],
  sources: [
    { title: "CDPH — Cottage Food Operations", url: CA_AGENCY, type: "agency_page" },
    { title: "Cal. Health & Safety Code § 114365 (Cottage Food Operations)", url: CA_STATUTE, type: "statute" },
  ],
  last_reviewed: "2025-09-20",
};
