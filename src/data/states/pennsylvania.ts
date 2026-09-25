import type { StateLaw } from "../schema";

const PA_AGENCY = "https://www.pa.gov/agencies/pda/food/food-safety/limited-food-establishment-";
const PA_PACKET = "https://www.pa.gov/content/dam/copapwp-pagov/en/pda/documents/consumer_protection/foodsafety/documents/limited%20food%20establishment%20application%20packet.pdf";
const PA_FARMERS_MARKET = "https://www.pa.gov/content/dam/copapwp-pagov/en/pda/documents/consumer_protection/foodsafety/retail-food/retail-food/documents/farmers%20market%20guidelines.pdf";
const PA_HONEY = "https://www.pa.gov/content/dam/copapwp-pagov/en/pda/documents/consumer_protection/foodsafety/manufacturing-packing-holding-distribution/commercial-food-establishments/documents/GUIDELINE%20FOR%20HONEY%20PROCESSORS%20pdf%20version.pdf";
const PA_STATUTE = "https://www.palegis.us/statutes/consolidated/view-statute?txtType=PDF&ttl=3&div=00.&chpt=57";
const PA_AGENCY_TITLE = "Pennsylvania Dept. of Agriculture — Limited Food Establishment";
const PA_PACKET_TITLE = "PDA Application Packet — Limited Food Establishments (Rev 10-2024)";
const PA_FARMERS_MARKET_TITLE = "PDA Farmers Market and Farm Stand Guidelines (Rev 2/2026)";
const PA_STATUTE_TITLE = "3 Pa.C.S. Ch. 57 (Food Safety Act)";
const VERIFIED = "2026-09-25";

export const pennsylvania: StateLaw = {
  slug: "pennsylvania",
  name: "Pennsylvania",
  abbreviation: "PA",
  program_name: {
    value: "Limited Food Establishment",
    source_url: PA_AGENCY,
    source_title: PA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Pennsylvania has no cottage food exemption. Home and home-style kitchens register with PDA as a food establishment and are inspected.",
  },
  agency: {
    value: "Pennsylvania Department of Agriculture (PDA), Bureau of Food Safety and Laboratory Services",
    source_url: PA_AGENCY,
    source_title: PA_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: true,
    source_url: PA_STATUTE,
    source_title: `${PA_STATUTE_TITLE}, § 5734(a)`,
    last_verified: VERIFIED,
    notes: "Every person operating a food establishment in Pennsylvania must register with the Secretary of Agriculture. Not available in Philadelphia County.",
  },
  permit_details: {
    value: "Submit the Limited Food Establishment application packet to PDA at least 60 days before operating, with a business plan, product labels, any required lab test results (pH, water activity), proof of water supply, and local zoning confirmation. PDA reviews plans within 15 business days, then an inspector does an on-site inspection; the registration fee is collected after a compliant inspection. Registration renews annually. No pets may be in the home when the personal kitchen is used, unless the food area is fully separated with its own entrance. Registration is not permitted in Philadelphia County.",
    source_url: PA_AGENCY,
    source_title: PA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Details from PDA's Limited Food Establishment application packet. Operators in a county health department's area must first get any county licenses or registrations. Selling at a farmers market, roadside stand, or fair may also need a Retail Food License.",
  },
  license_cost_usd: {
    value: 35,
    source_url: PA_STATUTE,
    source_title: `${PA_STATUTE_TITLE}, § 5734(c)`,
    last_verified: VERIFIED,
    notes: "$35 per food establishment per year; PDA lists $35 for registration and $35 for annual renewal. A retail food license for farmers market stands selling pre-packaged, shelf-stable items is fee-exempt but still requires licensing and inspection.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: PA_STATUTE,
    source_title: PA_STATUTE_TITLE,
    last_verified: VERIFIED,
    notes: "No sales limit appears in the Food Safety Act (3 Pa.C.S. §§ 5721–5737) or PDA's Limited Food Establishment page and application packet.",
  },
  food_status_overrides: {
    "pickles-and-fermented": {
      status: "restricted",
      reason: "PDA allows acid, acidified, and fermented foods (e.g., pickles, sauerkraut, kimchi, salsa) only if lab testing shows a finished equilibrium pH of 4.6 or below. Products between pH 4.2 and 4.6 need Process Authority approval, and batch pH records are required.",
    },
    "coffee-and-tea": {
      status: "allowed",
      reason: "PDA lists coffee/tea among allowed dry goods. Only freshly brewed coffee and tea are excluded, as TCS foods.",
    },
  },
  allowed_foods: {
    value: [
      "Baked goods (e.g., cakes, breads, bagels, cookies, rolls, muffins, brownies, biscuits, most fruit pies and pastries)",
      "Jams, jellies, preserves, and fruit butters (standard recipes; new or altered recipes need soluble-solids testing)",
      "Candy (e.g., fudge, caramels, truffles, cotton candy, lollipops, chocolates, hard candy); chocolate-covered fruit only with whole, uncut fruit at pH 4.6 or below",
      "Acid, acidified, and fermented foods with a lab-tested pH of 4.6 or below (e.g., pickles, sauerkraut, kimchi, salsa, hot sauces, BBQ sauce)",
      "Dry goods (e.g., cereals, coffee/tea, spices and seasonings, dry herbs, dry pasta, nuts, seeds, and mixes)",
      "Dehydrated foods (e.g., dried fruits and vegetables, dried herbs, beef or meat jerky)",
      "Freeze-dried foods, with water activity testing",
      "Condiments (e.g., honey, maple syrup and products, ketchup, mustards, vinegars, nut butters, dressings, sauces, oils other than garlic-in-oil)",
      "Acidic or fermented beverages with a pH of 4.6 or below (e.g., root beer, lemonade, lemon ice tea, kombucha)",
      "Other non-TCS (shelf-stable) foods, as evaluated by PDA product by product",
    ],
    source_url: PA_PACKET,
    source_title: `${PA_PACKET_TITLE}, pp. 11–16`,
    last_verified: VERIFIED,
    notes: "Not an exhaustive list: PDA evaluates each product. Only non-TCS foods (no refrigeration needed) may be made. PDA may require pH and water activity testing for questionable products.",
  },
  prohibited_foods: {
    value: [
      "Time/temperature control for safety (TCS) foods, e.g., raw or heat-treated animal foods (milk, dairy, eggs, meat, poultry, fish, shellfish), heat-treated plant foods, raw seed sprouts, cut fresh fruits and vegetables, garlic-in-oil, tofu and soy-protein foods",
      "Perishable baked goods (e.g., cheesecakes, pumpkin pies, cream, custard, or meringue pies and pastries, pudding)",
      "Low-acid canned foods and beverages (e.g., most soups, gravies, un-pickled vegetables, fruits in syrup)",
      "Freshly brewed coffee and tea",
    ],
    source_url: PA_PACKET,
    source_title: `${PA_PACKET_TITLE}, pp. 8–15`,
    last_verified: VERIFIED,
    notes: "Juice sold wholesale needs a HACCP plan and pathogen reduction and typically can't be made in a limited food establishment. Bottled fermented drinks can't rely on refrigeration alone to stop fermentation.",
  },
  labeling_requirements: {
    value: [
      "Name of the product",
      "Ingredients in descending order by weight, including sub-ingredients",
      "Allergen declaration, if needed",
      "Name and address of the manufacturer or distributor",
      "Net weight or count, in the bottom third of the primary panel, at least 8-point type",
      "Nutrition labeling for products sold interstate, unless FDA grants a small-business exemption",
      "Unpasteurized juice: FDA warning statement",
    ],
    source_url: PA_PACKET,
    source_title: `${PA_PACKET_TITLE}, § 5 and pp. 10–13`,
    last_verified: VERIFIED,
    notes: "Bakery items the baker sells directly to Pennsylvania consumers (at the production site or a satellite such as a farmers market) need no label, but ingredient information must be available on request. Baked goods sold through a retail facility not run by the baker need full labeling. Claims such as \"gluten free\" must be substantiated.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: true,
      delivery_in_state: null,
      retail_resale: true,
      notes: "Registration covers sales direct from the production site, including internet sales. Retail and wholesale are both allowed, including to stores and restaurants. Farmers markets, roadside stands, and fairs may also need a Retail Food License (fee-exempt for pre-packaged, shelf-stable items). Interstate sales are allowed but may require FDA food facility registration and nutrition labeling. PDA sources don't address delivery.",
    },
    source_url: PA_AGENCY,
    source_title: PA_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  training_required: {
    unverified: true,
    note: "PDA's Limited Food Establishment page and application packet name no training course or certificate; the packet says operators \"must demonstrate basic food safety knowledge.\" Not confirmed whether a certified food employee rule applies when a Retail Food License is also needed.",
  },
  inspection_required: {
    value: true,
    source_url: PA_AGENCY,
    source_title: PA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "An opening inspection is required before operating, and PDA inspects the production site on a routine basis.",
  },
  caveats: [
    "Pennsylvania has no cottage food exemption: home kitchens register with PDA and are inspected.",
    "Limited Food Establishment registration is not available in Philadelphia County.",
    "Honey producers register as a food establishment ($35/year), but a honey establishment where 100% of the honey is produced or processed on its own farm is exempt from the registration fee and routine inspection (3 Pa.C.S. § 5734(d)(2)).",
    "Some counties and cities have their own health departments; their licensing applies in addition to PDA registration.",
  ],
  sources: [
    { title: PA_AGENCY_TITLE, url: PA_AGENCY, type: "agency_page" },
    { title: PA_PACKET_TITLE, url: PA_PACKET, type: "official_pdf" },
    { title: PA_FARMERS_MARKET_TITLE, url: PA_FARMERS_MARKET, type: "guidance" },
    { title: "PDA Guidelines for Honey Processors in PA (Rev 02/2023)", url: PA_HONEY, type: "guidance" },
    { title: "3 Pa.C.S. Ch. 57 (Food Safety Act, §§ 5721–5737)", url: PA_STATUTE, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
