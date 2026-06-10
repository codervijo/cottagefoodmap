import type { StateLaw } from "../schema";

const NY_AGENCY = "https://agriculture.ny.gov/food-safety/home-processors";
const NY_PDF = "https://agriculture.ny.gov/system/files/documents/2024/02/homeprocessor.pdf";

export const newYork: StateLaw = {
  slug: "new-york",
  name: "New York",
  abbreviation: "NY",
  program_name: { value: "Home Processor Exemption (Article 20-C)", source_url: NY_AGENCY, source_title: "NY Dept. of Ag & Markets — Home Processors", last_verified: "2025-09-22" },
  agency: { value: "New York State Department of Agriculture and Markets", source_url: NY_AGENCY, last_verified: "2025-09-22" },
  permit_required: { value: true, source_url: NY_PDF, source_title: "NY Home Processor Exemption Application", last_verified: "2025-09-22", notes: "Free Home Processor exemption from Article 20-C food processing license." },
  permit_details: { value: "Operators submit a Home Processor Exemption application. Once approved, no Article 20-C license is required and no home inspection occurs unless a complaint is filed.", source_url: NY_PDF, last_verified: "2025-09-22" },
  license_cost_usd: { value: 0, source_url: NY_PDF, last_verified: "2025-09-22", notes: "Exemption application is free." },
  sales_cap_usd_annual: { value: "none", source_url: NY_PDF, last_verified: "2025-09-22", notes: "No statutory sales cap." },
  allowed_foods: {
    value: [
      "Baked goods that do not require refrigeration (breads, cakes, cookies, brownies, fruit pies)",
      "Candy (excluding chocolate)",
      "Jams, jellies, marmalades made from high-acid fruits",
      "Snack items (popcorn, caramel corn, peanut brittle)",
      "Spices and herb blends",
      "Dry baking mixes",
    ],
    source_url: NY_PDF,
    last_verified: "2025-09-22",
  },
  prohibited_foods: {
    value: [
      "Meat, poultry, seafood",
      "Cream- or custard-filled baked goods, cheesecake",
      "Pumpkin and sweet potato pies",
      "Garlic-in-oil mixtures",
      "Pickles, sauces, salsa, low-acid canned goods",
      "Chocolate candies",
      "Dairy-based products",
    ],
    source_url: NY_PDF,
    last_verified: "2025-09-22",
  },
  labeling_requirements: {
    value: [
      "Common name of the product",
      "Net weight or volume",
      "Ingredient list in descending order by weight",
      "Allergen disclosure",
      "Name and address of the home processor",
      "Statement: \"Not Inspected by the New York State Department of Agriculture and Markets.\"",
    ],
    source_url: NY_PDF,
    last_verified: "2025-09-22",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Direct-to-consumer sales within New York. Out-of-state shipping not authorized under the exemption.",
    },
    source_url: NY_PDF,
    last_verified: "2025-09-22",
  },
  training_required: { value: false, source_url: NY_PDF, last_verified: "2025-09-22" },
  inspection_required: { value: false, source_url: NY_PDF, last_verified: "2025-09-22", notes: "Inspections only triggered by complaints." },
  caveats: [
    "New York City has additional Department of Health rules; consult local guidance.",
    "Acid-tested foods (e.g., pickles, salsa) require a 20-C license and are not covered by the exemption.",
  ],
  sources: [
    { title: "NY Department of Agriculture and Markets — Home Processors", url: NY_AGENCY, type: "agency_page" },
    { title: "Home Processor Exemption Application (PDF)", url: NY_PDF, type: "official_pdf" },
  ],
  last_reviewed: "2025-09-22",
};
