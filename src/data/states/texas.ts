import type { StateLaw } from "../schema";

const TX_AGENCY_PAGE = "https://www.dshs.texas.gov/food-establishments/cottage-food-production-operations";
const TX_STATUTE = "https://statutes.capitol.texas.gov/Docs/HS/htm/HS.437.htm";

export const texas: StateLaw = {
  slug: "texas",
  name: "Texas",
  abbreviation: "TX",
  program_name: { value: "Cottage Food Production Operation", source_url: TX_AGENCY_PAGE, source_title: "Texas DSHS — Cottage Food Production Operations", last_verified: "2025-09-15" },
  agency: { value: "Texas Department of State Health Services (DSHS)", source_url: TX_AGENCY_PAGE, source_title: "Texas DSHS", last_verified: "2025-09-15" },
  permit_required: { value: false, source_url: TX_AGENCY_PAGE, source_title: "Texas DSHS — Cottage Food", last_verified: "2025-09-15", notes: "No state permit or license; food handler training is required." },
  permit_details: { value: "Texas does not require a state license or permit to operate a Cottage Food Production Operation. Operators must complete an accredited food handler course.", source_url: TX_AGENCY_PAGE, last_verified: "2025-09-15" },
  license_cost_usd: { value: "none", source_url: TX_AGENCY_PAGE, last_verified: "2025-09-15", notes: "No license fee; food handler course typically $7–$15 from accredited providers." },
  sales_cap_usd_annual: { value: 50000, source_url: TX_STATUTE, source_title: "Tex. Health & Safety Code Ch. 437", last_verified: "2025-09-15" },
  allowed_foods: {
    value: [
      "Baked goods (non potentially hazardous)",
      "Candy",
      "Jams, jellies, and fruit preserves",
      "Dried fruits and dried herbs",
      "Granola, cereal, trail mix",
      "Roasted coffee, dry tea",
      "Popcorn and popcorn snacks",
      "Pickles and acidified canned goods (with pH testing)",
      "Fermented vegetables (with pH testing)",
      "Frozen raw uncut produce",
    ],
    source_url: TX_AGENCY_PAGE,
    source_title: "Texas DSHS — Allowed Foods",
    last_verified: "2025-09-15",
  },
  prohibited_foods: {
    value: [
      "Meat and poultry products",
      "Fish and shellfish",
      "Raw seed sprouts",
      "Cut melons, cut tomatoes, cut leafy greens",
      "Foods requiring refrigeration (TCS foods)",
      "Juice and unpasteurized dairy",
    ],
    source_url: TX_AGENCY_PAGE,
    last_verified: "2025-09-15",
  },
  labeling_requirements: {
    value: [
      "Name and physical address of the cottage food production operation",
      "Common name of the product",
      "Ingredient list in descending order by weight",
      "Net weight or volume",
      "Allergen disclosure (FDA major allergens)",
      "Statement: \"This food is made in a home kitchen and is not inspected by the Department of State Health Services or a local health department.\"",
    ],
    source_url: TX_AGENCY_PAGE,
    source_title: "Texas DSHS — Labeling",
    last_verified: "2025-09-15",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Direct-to-consumer only. Interstate shipping is not authorized under Texas cottage food law.",
    },
    source_url: TX_AGENCY_PAGE,
    last_verified: "2025-09-15",
  },
  training_required: { value: true, source_url: TX_AGENCY_PAGE, source_title: "Texas DSHS — Food Handler Training", last_verified: "2025-09-15", notes: "Accredited food handler course required." },
  inspection_required: { value: false, source_url: TX_AGENCY_PAGE, last_verified: "2025-09-15" },
  caveats: [
    "Cities and counties may impose additional zoning rules.",
    "Pickles, acidified, and fermented foods require pH testing documentation.",
  ],
  sources: [
    { title: "Texas DSHS — Cottage Food Production Operations", url: TX_AGENCY_PAGE, type: "agency_page" },
    { title: "Texas Health & Safety Code, Chapter 437", url: TX_STATUTE, type: "statute" },
  ],
  last_reviewed: "2025-09-15",
};
