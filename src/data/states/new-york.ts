import type { StateLaw } from "../schema";

const NY_AGENCY = "https://agriculture.ny.gov/food-safety/home-processing";
const NY_FLOWCHART = "https://agriculture.ny.gov/system/files/documents/2026/08/homeprocessing_qualitficationflowchart.pdf";
const NY_TITLE = "NY Dept. of Agriculture & Markets — Home Processing";
const VERIFIED = "2026-09-15";

export const newYork: StateLaw = {
  slug: "new-york",
  name: "New York",
  abbreviation: "NY",
  program_name: { value: "Home Processor Exemption (Article 20-C)", source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "Allowed under Agriculture & Markets regulation 1 CRR-NY 276.4." },
  agency: { value: "New York State Department of Agriculture and Markets (AGM), Division of Food Safety and Inspection", source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED },
  permit_required: { value: true, source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "A free Home Processor Registration exempts the operation from Article 20-C licensing." },
  permit_details: {
    value: "Submit a Home Processor Registration Request to AGM. Homes on a private well must include a certified lab water test (total coliform and E. coli). Registration is location-specific — moving means reapplying — and does not currently expire. AGM advises allowing up to 16 weeks for review. Kitchens are reviewed on a complaint basis only.",
    source_url: NY_AGENCY,
    source_title: NY_TITLE,
    last_verified: VERIFIED,
  },
  license_cost_usd: { value: 0, source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "AGM states there is currently no fee for Home Processor Registration." },
  sales_cap_usd_annual: { value: "none", source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "AGM's home processing guidance lists no sales limit." },
  food_status_overrides: {
    honey: {
      status: "unclear",
      reason: "Honey is not on AGM's Home Processor lists. Honey from your own production is covered by a separate AGM exemption, not the Home Processor exemption.",
    },
    "coffee-and-tea": {
      status: "prohibited",
      reason: "AGM lists beverages and roasting or grinding coffee beans as prohibited. Tea is not named on either AGM list.",
    },
  },
  allowed_foods: {
    value: [
      "Breads, rolls, biscuits, bagels, muffins, and scones (high-acid or commercially dried fruit and herbs OK; no vegetables)",
      "Doughnuts (no cream fillings), cookies, baklava, biscotti, brownies",
      "Cakes and cupcakes (no homemade buttercream or cream cheese frostings)",
      "Double-crust fruit pies",
      "Fruit jams, jellies, and marmalades made with high-acid fruits",
      "Repacking or blending commercially dried spices or herbs; seasoning salt",
      "Repackaging dried vegetables, dried soup mixes, and dried fruit",
      "Repackaging and blending dry ingredients for baking mixes",
      "Fudge, popcorn and caramel corn, Rice Krispies treats",
      "Peanut brittle, granola, trail mix, and granola bars (commercially roasted nuts)",
      "Waffle cones and pizzelle; toffee or caramel apples (no chocolate or candy melts)",
      "Sugar confections (toffees, caramels, hard candies)",
      "Vegetable and potato chips, crackers, pretzels",
    ],
    source_url: NY_AGENCY,
    source_title: `${NY_TITLE} (Approved Home Processed Foods)`,
    last_verified: VERIFIED,
    notes: "Any finished product that requires refrigeration is prohibited.",
  },
  prohibited_foods: {
    value: [
      "Homemade buttercream or cream cheese frosting containing dairy or eggs",
      "Breads containing vegetables",
      "Products containing alcohol",
      "\"No-bake\" products",
      "Pickles, relishes, jalapeños, sauerkraut",
      "Sauces, salsas, marinades, mustards, ketchups, vinegars",
      "Pepper, wine, vegetable, or flower jellies; chutneys; fruit or simple syrups",
      "Cooked or canned fruits or vegetables",
      "Vegetable oils, blended oils, salad dressings",
      "Cheesecake, cream-filled pastries, cream pies, meringue pies",
      "Single-crust, custard, nut, or meat pies",
      "Tempered chocolate or candy melts for dipping or coating (e.g., cocoa bombs, chocolate candy, chocolate-covered fruit)",
      "Products containing raw nuts; nut butters",
      "Cheese, yogurt, fluid dairy products, butters",
      "Meat, fish, or poultry products",
      "Beverages; roasting or grinding coffee beans",
      "Freeze-dried foods, compotes, spreads, quiche, fudge or caramel sauces",
    ],
    source_url: NY_AGENCY,
    source_title: `${NY_TITLE} (Prohibited Foods)`,
    last_verified: VERIFIED,
    notes: "AGM's list is examples only (\"include, but are not limited to\").",
  },
  labeling_requirements: {
    value: [
      "Common or usual name of the product",
      "Ingredient list in order of predominance by weight",
      "Net quantity of contents",
      "Processor name and full address",
      "All major allergens (eggs, milk, fish, shellfish, soybeans, peanuts, tree nuts, wheat, sesame) clearly identified in the ingredient statement",
      "Recommended: a phrase such as \"Made in a Home Kitchen\" in type at least 1/16 inch",
    ],
    source_url: NY_AGENCY,
    source_title: `${NY_TITLE} (Labeling)`,
    last_verified: VERIFIED,
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: true,
      notes: "Wholesale and retail sales within New York only — farms, farm stands, farmers' and green markets, craft fairs, flea markets, home delivery, and the internet. Wholesale to restaurants, cafes, and grocery stores is allowed. Products must be pre-packaged and labeled at home. No out-of-state sales or shipping.",
    },
    source_url: NY_AGENCY,
    source_title: NY_TITLE,
    last_verified: VERIFIED,
  },
  training_required: { value: false, source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "AGM's registration requirements list no training." },
  inspection_required: { value: false, source_url: NY_AGENCY, source_title: NY_TITLE, last_verified: VERIFIED, notes: "Kitchens are reviewed on a complaint basis only." },
  caveats: [
    "Honey and maple syrup from your own production are covered by a separate AGM exemption, not the Home Processor exemption.",
    "AGM advises checking with local zoning officials before starting a home-based business.",
  ],
  sources: [
    { title: "NY Department of Agriculture and Markets — Home Processing", url: NY_AGENCY, type: "agency_page" },
    { title: "Home Processing Qualification Flowchart (revised July 2026)", url: NY_FLOWCHART, type: "official_pdf" },
  ],
  last_reviewed: VERIFIED,
};
