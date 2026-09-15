import type { StateLaw } from "../schema";

const OH_AGENCY = "https://agri.ohio.gov/divisions/food-safety/resources/cottage-food";
const OH_HOME_BAKERY = "https://agri.ohio.gov/divisions/food-safety/resources/home-bakery";
const OH_FAQ = "https://agri.ohio.gov/divisions/food-safety/questions";
const OH_RULES = "https://codes.ohio.gov/ohio-administrative-code/chapter-901:3-20";
const OH_LABEL_STATUTE = "https://codes.ohio.gov/ohio-revised-code/section-3715.023";
const OH_STATUTE = "https://codes.ohio.gov/ohio-revised-code/section-3715.01";
const OH_AGENCY_TITLE = "Ohio Dept. of Agriculture — Cottage Food";
const OH_RULES_TITLE = "Ohio Adm. Code Chapter 901:3-20";
const VERIFIED = "2026-09-15";

export const ohio: StateLaw = {
  slug: "ohio",
  name: "Ohio",
  abbreviation: "OH",
  program_name: { value: "Cottage Food Production Operation", source_url: OH_AGENCY, source_title: OH_AGENCY_TITLE, last_verified: VERIFIED, notes: "A separate Home Bakery license covers bakery items that need refrigeration." },
  agency: { value: "Ohio Department of Agriculture (ODA), Division of Food Safety", source_url: OH_AGENCY, source_title: OH_AGENCY_TITLE, last_verified: VERIFIED },
  permit_required: {
    value: false,
    source_url: OH_AGENCY,
    source_title: OH_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Cottage food operations are exempt from ODA licensing and inspection. Bakery items that need refrigeration (e.g., cheesecakes, cream, custard, and pumpkin pies) require a separate Home Bakery license.",
  },
  permit_details: {
    value: "Ohio cottage food production operations need no license or inspection from ODA, but their products are subject to ODA food sampling to check for misbranding or adulteration. Potentially hazardous bakery products that need refrigeration require a separate, inspected Home Bakery license.",
    source_url: OH_AGENCY,
    source_title: OH_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  license_cost_usd: {
    value: "none",
    source_url: OH_AGENCY,
    source_title: OH_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Cottage food: no license, no fee. The separate Home Bakery license is $10 per year, renewed every September.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: OH_RULES,
    source_title: OH_RULES_TITLE,
    last_verified: VERIFIED,
    notes: "No sales limit appears in Ohio's cottage food rules or ODA guidance.",
  },
  food_status_overrides: {
    honey: {
      status: "restricted",
      reason: "Ohio's cottage food list includes only flavored honey produced by a beekeeper exempt under ORC 3715.021(A). Plain honey is not a listed cottage food; a beekeeper who jars honey at least 75% from their own hives is covered by that separate exemption.",
    },
  },
  allowed_foods: {
    value: [
      "Non-potentially hazardous bakery products (e.g., cookies, breads, brownies, cakes, fruit pies)",
      "Jams",
      "Jellies",
      "Candy (including no-bake cookies and chocolate-covered pretzels), not including fresh fruit dipped in or combined with candy",
      "Flavored honey produced by a beekeeper exempt under ORC 3715.021(A)",
      "Fruit chutneys",
      "Fruit butters",
      "Granola, granola bars, and candy-dipped granola bars (any fruit must be commercially dried)",
      "Maple sugar produced by an exempt maple syrup producer",
      "Popcorn, flavored popcorn, kettle corn, popcorn balls, caramel corn (not popping corn)",
      "Unfilled baked donuts",
      "Waffle cones, including candy-dipped",
      "Pizzelles",
      "Dry cereal and nut snack mixes with seasonings",
      "Roasted coffee, whole beans or ground",
      "Dry baking mixes in a jar",
      "Dry herbs and herb blends",
      "Dry soup mixes with commercially dried vegetables, beans, grains, and seasonings",
      "Dry seasoning blends",
      "Dry tea blends",
    ],
    source_url: OH_RULES,
    source_title: `${OH_RULES_TITLE}, rule 901:3-20-04`,
    last_verified: VERIFIED,
    notes: "The list is exhaustive: foods not expressly listed may not be produced (rule 901:3-20-05). Reduced oxygen packaging is not allowed.",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous foods (e.g., raw or cooked animal products, cooked vegetables, garlic in oil, cheesecakes, pumpkin pies, custard pies, cream pies)",
      "Acidified foods (e.g., pickles)",
      "Low-acid canned foods",
      "Any food not on the approved list",
    ],
    source_url: OH_AGENCY,
    source_title: OH_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Also barred by Ohio Adm. Code 901:3-20-05.",
  },
  labeling_requirements: {
    value: [
      "Name of the food (common or usual name)",
      "Net quantity in both U.S. customary and metric units",
      "Ingredients in descending order of predominance by weight",
      "Major food allergens declared in the ingredient list or a \"Contains\" statement",
      "Name and address of the business",
      "\"This product is home produced.\" in 10-point type",
      "Nutrition Facts panel if nutrient content or health claims are made",
    ],
    source_url: OH_AGENCY,
    source_title: `${OH_AGENCY_TITLE} (labeling)`,
    last_verified: VERIFIED,
    notes: "Required by ORC 3715.023 and OAC 901:3-20-02 (21 CFR Part 101).",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: null,
      online_out_of_state: false,
      delivery_in_state: null,
      retail_resale: true,
      notes: "Ohio only. Direct from the home where made; through grocery stores, registered farm markets, farmers' markets, and restaurants; and at festivals organized by a political subdivision lasting no more than seven days. Items must be pre-packaged and labeled at markets. ODA's cottage food guidance doesn't address online sales or delivery.",
    },
    source_url: OH_AGENCY,
    source_title: OH_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  training_required: { value: false, source_url: OH_RULES, source_title: OH_RULES_TITLE, last_verified: VERIFIED, notes: "Ohio's cottage food rules contain no training requirement." },
  inspection_required: { value: false, source_url: OH_AGENCY, source_title: OH_AGENCY_TITLE, last_verified: VERIFIED, notes: "Exempt from ODA inspection; products remain subject to ODA sampling." },
  caveats: [
    "The Home Bakery program (a separate $10/year license with a home kitchen inspection) covers bakery items that need refrigeration.",
    "Plain honey isn't on the cottage food list; beekeepers who jar honey mostly from their own hives are covered by a separate exemption (ORC 3715.021).",
  ],
  sources: [
    { title: OH_AGENCY_TITLE, url: OH_AGENCY, type: "agency_page" },
    { title: "Ohio Dept. of Agriculture — Home Bakery", url: OH_HOME_BAKERY, type: "agency_page" },
    { title: "Ohio Dept. of Agriculture — Food Safety FAQ", url: OH_FAQ, type: "guidance" },
    { title: "Ohio Adm. Code Chapter 901:3-20 (Cottage Food)", url: OH_RULES, type: "regulation" },
    { title: "Ohio Rev. Code § 3715.023 (labeling)", url: OH_LABEL_STATUTE, type: "statute" },
    { title: "Ohio Rev. Code § 3715.01 (definitions)", url: OH_STATUTE, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
