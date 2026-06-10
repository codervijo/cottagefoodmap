import type { StateLaw } from "../schema";

const OH_AGENCY = "https://agri.ohio.gov/divisions/food-safety/resources/home-bakery-cottage-food";
const OH_STATUTE = "https://codes.ohio.gov/ohio-revised-code/section-3715.01";

export const ohio: StateLaw = {
  slug: "ohio",
  name: "Ohio",
  abbreviation: "OH",
  program_name: { value: "Cottage Food Production (and separate Home Bakery license)", source_url: OH_AGENCY, source_title: "Ohio Dept. of Agriculture — Home Bakery / Cottage Food", last_verified: "2025-09-25" },
  agency: { value: "Ohio Department of Agriculture (ODA), Division of Food Safety", source_url: OH_AGENCY, last_verified: "2025-09-25" },
  permit_required: { value: false, source_url: OH_AGENCY, last_verified: "2025-09-25", notes: "No license required for Cottage Food. A separate Home Bakery license is required for items containing baked-in dairy or eggs that require refrigeration." },
  permit_details: { value: "Ohio Cottage Food does not require registration, license, or inspection. A Home Bakery license (with inspection) is required to produce baked goods containing fillings or ingredients that require refrigeration.", source_url: OH_AGENCY, last_verified: "2025-09-25" },
  license_cost_usd: { value: "none", source_url: OH_AGENCY, last_verified: "2025-09-25", notes: "Cottage Food: $0. Home Bakery license is separate and not covered here." },
  sales_cap_usd_annual: { value: "none", source_url: OH_AGENCY, last_verified: "2025-09-25" },
  allowed_foods: {
    value: [
      "Non-potentially hazardous baked goods (cookies, brownies, fruit pies, breads)",
      "Candy (excluding fudge or chocolate requiring temperature control)",
      "Fruit jams and jellies",
      "Granola and granola bars",
      "Dry herbs, seasoning blends, dry baking mixes",
      "Popcorn, caramel popcorn, popcorn balls",
      "Roasted coffee beans",
      "Waffle cones and pizzelles",
    ],
    source_url: OH_AGENCY,
    last_verified: "2025-09-25",
  },
  prohibited_foods: {
    value: [
      "Meat, poultry, fish, shellfish",
      "Cream, custard, or meringue pies",
      "Cheesecake and cream-cheese-frosted items",
      "Pumpkin pies",
      "Salsa, pickles, low-acid canned goods",
      "Beverages other than dry coffee/tea",
    ],
    source_url: OH_AGENCY,
    last_verified: "2025-09-25",
  },
  labeling_requirements: {
    value: [
      "Name of the food product",
      "Name and address of the cottage food production operation",
      "Ingredients in descending order by weight",
      "Net weight",
      "Allergen disclosure",
      "Statement (10-pt type): \"This product is home-produced.\"",
    ],
    source_url: OH_AGENCY,
    last_verified: "2025-09-25",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: true,
      notes: "Cottage food may be sold to retail stores within Ohio. Out-of-state sales are not authorized.",
    },
    source_url: OH_AGENCY,
    last_verified: "2025-09-25",
  },
  training_required: { value: false, source_url: OH_AGENCY, last_verified: "2025-09-25" },
  inspection_required: { value: false, source_url: OH_AGENCY, last_verified: "2025-09-25" },
  caveats: [
    "The Home Bakery program (separate license) covers products requiring temperature control.",
    "Local zoning may still apply.",
  ],
  sources: [
    { title: "Ohio Dept. of Agriculture — Home Bakery / Cottage Food", url: OH_AGENCY, type: "agency_page" },
    { title: "Ohio Revised Code § 3715.01 (definitions)", url: OH_STATUTE, type: "statute" },
  ],
  last_reviewed: "2025-09-25",
};
