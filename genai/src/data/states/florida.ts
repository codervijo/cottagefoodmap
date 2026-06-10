import type { StateLaw } from "../schema";

const FL_AGENCY = "https://www.fdacs.gov/Business-Services/Food-Establishments/Cottage-Foods";
const FL_STATUTE = "https://www.flsenate.gov/Laws/Statutes/2023/500.80";

export const florida: StateLaw = {
  slug: "florida",
  name: "Florida",
  abbreviation: "FL",
  program_name: { value: "Cottage Food Operation", source_url: FL_AGENCY, source_title: "FDACS — Cottage Foods", last_verified: "2025-09-18" },
  agency: { value: "Florida Department of Agriculture and Consumer Services (FDACS)", source_url: FL_AGENCY, last_verified: "2025-09-18" },
  permit_required: { value: false, source_url: FL_AGENCY, last_verified: "2025-09-18", notes: "No license or permit required from FDACS." },
  permit_details: { value: "Florida does not require any state license, permit, or inspection for cottage food operations.", source_url: FL_AGENCY, last_verified: "2025-09-18" },
  license_cost_usd: { value: "none", source_url: FL_AGENCY, last_verified: "2025-09-18" },
  sales_cap_usd_annual: { value: 250000, source_url: FL_STATUTE, source_title: "Fla. Stat. § 500.80", last_verified: "2025-09-18", notes: "Cap raised to $250,000 by HB 1095 (2021)." },
  allowed_foods: {
    value: [
      "Loaves of bread, biscuits, rolls",
      "Cakes, pastries, cookies (not cream- or meat-filled)",
      "Candies and confections",
      "Honey",
      "Jams, jellies, preserves",
      "Fruit pies and fruit empanadas",
      "Dried fruits, dry herbs, dry baking mixes, dry pasta",
      "Granola, cereals, trail mixes",
      "Roasted coffee, dry tea",
      "Popcorn and popcorn balls",
      "Vinegar and flavored vinegars",
    ],
    source_url: FL_AGENCY,
    last_verified: "2025-09-18",
  },
  prohibited_foods: {
    value: [
      "Any time/temperature control for safety (TCS) food",
      "Meat, poultry, seafood",
      "Dairy products (except as ingredient in non-TCS baked goods)",
      "Cream pies, cheesecakes, custard-filled items",
      "Pickled or fermented foods",
      "Hot-sauce, salsa, low-acid canned goods",
    ],
    source_url: FL_AGENCY,
    last_verified: "2025-09-18",
  },
  labeling_requirements: {
    value: [
      "Name and address of the cottage food operation",
      "Common name of the product",
      "Ingredients in descending order by weight",
      "Net weight or net volume",
      "Allergen disclosure",
      "Statement (10-pt type): \"Made in a cottage food operation that is not subject to Florida's food safety regulations.\"",
    ],
    source_url: FL_AGENCY,
    last_verified: "2025-09-18",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: true,
      delivery_in_state: true,
      retail_resale: false,
      notes: "HB 663 (2022) authorizes online sales and mail order within and across state lines, subject to applicable federal law. No wholesale or retail resale.",
    },
    source_url: FL_STATUTE,
    last_verified: "2025-09-18",
  },
  training_required: { value: false, source_url: FL_AGENCY, last_verified: "2025-09-18" },
  inspection_required: { value: false, source_url: FL_AGENCY, last_verified: "2025-09-18" },
  caveats: [
    "Interstate shipping is permitted under Florida law but the receiving state's laws still apply.",
    "Local zoning ordinances may still restrict home-based businesses.",
  ],
  sources: [
    { title: "FDACS — Cottage Foods", url: FL_AGENCY, type: "agency_page" },
    { title: "Fla. Stat. § 500.80", url: FL_STATUTE, type: "statute" },
  ],
  last_reviewed: "2025-09-18",
};
