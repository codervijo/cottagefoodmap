import type { StateLaw } from "../schema";

const IL_STATUTE = "https://www.ilga.gov/Documents/legislation/ilcs/documents/041006250K4.htm";
const IL_HOME_KITCHEN = "https://www.ilga.gov/Documents/legislation/ilcs/documents/041006250K3.6.htm";
const IL_AGENCY = "https://dph.illinois.gov/topics-services/food-safety/cottage-food.html";
const IL_LABELING = "https://dph.illinois.gov/content/dam/soi/en/web/idph/publications/idph/topics-and-services/food-safety/cottage-food/cottage-food-labeling-12262025.pdf";
const IL_GUIDE = "https://extension.illinois.edu/sites/default/files/2024-10/cottage_food_guide.pdf";
const IL_STATUTE_TITLE = "410 ILCS 625/4 (Food Handling Regulation Enforcement Act, Sec. 4)";
const IL_AGENCY_TITLE = "Illinois Dept. of Public Health — Cottage Food";
const IL_LABELING_TITLE = "IDPH — Cottage Food Labeling checklist";
const IL_GUIDE_TITLE = "2024 Cottage Food Guide (IDPH with University of Illinois Extension)";
const VERIFIED = "2026-09-25";

export const illinois: StateLaw = {
  slug: "illinois",
  name: "Illinois",
  abbreviation: "IL",
  program_name: { value: "Cottage Food Operation", source_url: IL_STATUTE, source_title: `${IL_STATUTE_TITLE}, subsec. (a)`, last_verified: VERIFIED, notes: "A separate, much narrower Home Kitchen Operation (410 ILCS 625/3.6) applies only where a local ordinance authorizes it." },
  agency: {
    value: "Local health departments (registration); Illinois Department of Public Health (IDPH) issues statewide guidance",
    source_url: IL_AGENCY,
    source_title: IL_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Operators register with the local health department where they live. In a county with no local health department, the county contracts with an adjacent county's health department to register operations.",
  },
  permit_required: {
    value: true,
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (b)(1.3), (c)`,
    last_verified: VERIFIED,
    notes: "An annual registration with the local health department, not a license; registration does not involve an inspection.",
  },
  permit_details: {
    value: "Register every year with the local health department where you live; you then get a certificate of registration and a registration number for your labels, and may sell anywhere in Illinois. Everyone who prepares or packages the food must hold a Certified Food Protection Manager (CFPM) certificate. Fermented or acidified foods need a tested recipe or a written food safety plan with a pH test. Operators on a private well may be asked for a water test.",
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (b)–(c)`,
    last_verified: VERIFIED,
  },
  license_cost_usd: {
    value: "varies",
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (c)`,
    last_verified: VERIFIED,
    notes: "Set by each local health department, up to $50 per year by statute (IDPH's guide: \"may charge between $0 and $50\"). Separate costs may apply for CFPM certification, recipe or pH testing, and water tests.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: IL_GUIDE,
    source_title: IL_GUIDE_TITLE,
    last_verified: VERIFIED,
    notes: "The guide answers \"Is there a sales cap on my earnings?\" with \"No.\" 410 ILCS 625/4 sets no sales limit.",
  },
  allows_all_except_prohibited: true,
  food_status_overrides: {
    honey: {
      status: "restricted",
      reason: "IDPH's Cottage Food Guide says honey from your own beehives is \"not considered a cottage food product\" (it's regulated separately), while honey with an ingredient infused or whipped into it, made in a home kitchen, falls under the Cottage Food Law.",
    },
    "pickles-and-fermented": {
      status: "restricted",
      reason: "410 ILCS 625/4(b)(2)–(3): to sell a fermented or acidified food, the operator must submit a USDA- or extension-tested recipe, or a written food safety plan plus a pH test for each product category. Canned products must be processed in a boiling water bath in a Mason-style jar or glass container; uncanned ones must be kept at or below 41 degrees. Canned tomato products (e.g., salsa) need an exactly followed tested recipe or an annual commercial lab test ((b)(1.6)).",
    },
    "dried-goods": {
      status: "restricted",
      reason: "410 ILCS 625/4(b)(1.5) allows most dried foods but excludes dehydrated tomato or melon.",
    },
  },
  allowed_foods: {
    value: [
      "Any food or drink other than the prohibited items listed",
      "Baked goods and candy that are not time/temperature control for safety (TCS) foods may contain dairy (e.g., caramel, buttercream frosting)",
      "Cooked (not raw) eggs as an ingredient in non-TCS foods, including dry noodles, or in baked-good frosting",
      "Fermented and acidified foods (e.g., pickles, kimchi, hot sauce) with a tested recipe or an approved food safety plan and pH test",
      "Time/temperature control for safety (TCS) foods not on the prohibited list, held and transported at required temperatures (may not be shipped)",
    ],
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (a), (b)(1.5)–(3), (12), (14)`,
    last_verified: VERIFIED,
    notes: "A local health department may require a lab test showing a baked good with cheese is not a TCS food. Alcohol may be used in extracts or baked goods not intended as beverages.",
  },
  prohibited_foods: {
    value: [
      "Meat, poultry, fish, seafood, or shellfish",
      "Dairy, except as an ingredient in non-TCS items such as caramel or buttercream frosting",
      "Eggs, except cooked eggs as an ingredient in non-TCS foods or frosting",
      "Pumpkin pies, sweet potato pies, cheesecakes, custard pies, creme pies, and pastries with TCS fillings or toppings",
      "Garlic in oil or oil infused with garlic, unless the garlic oil is acidified",
      "Low-acid canned foods",
      "Sprouts",
      "Cut leafy greens, unless dehydrated, acidified, or blanched and frozen",
      "Cut or pureed fresh tomato or melon; dehydrated tomato or melon; frozen cut melon",
      "Wild-harvested, non-cultivated mushrooms",
      "Alcoholic beverages",
      "Kombucha",
    ],
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (b)(1.5)`,
    last_verified: VERIFIED,
    notes: "Also barred: processed foods containing these items, except as stated.",
  },
  labeling_requirements: {
    value: [
      "Name of the cottage food operation and the unit of local government where it is located",
      "Registration number from the local health department, and the municipality or county where registered",
      "Common or usual name of the product",
      "All ingredients, including any color, artificial flavor, and preservative, in descending order of predominance by weight",
      "Allergen labeling as required by federal law",
      "Date the product was processed",
      "Net weight",
      "\"This product was produced in a home kitchen not inspected by a health department that may also process common food allergens. If you have safety concerns, contact your local health department.\" in prominent lettering",
    ],
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (b)(7)`,
    last_verified: VERIFIED,
    notes: "Products must be prepackaged unless the local health department where they're sold grants an exception (then written notice goes to the buyer). Net weight is listed on IDPH's labeling checklist, not in Sec. 4. A point-of-sale notice (a placard at a display, a message at online checkout) is also required.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Direct to consumers only, not for resale: farmers' markets and mobile farmers markets; fairs, festivals, public events, or online; pickup from the operator's home or farm (subject to local law); delivery to the customer; and pickup from third-party private property with the owner's consent. Only non-TCS foods may be shipped, sealed to reveal tampering, and nothing may be shipped out of state. IDPH: no sales in retail food establishments.",
    },
    source_url: IL_STATUTE,
    source_title: `${IL_STATUTE_TITLE}, subsec. (b)(11)–(12)`,
    last_verified: VERIFIED,
  },
  training_required: { value: true, source_url: IL_STATUTE, source_title: `${IL_STATUTE_TITLE}, subsec. (b)(6)`, last_verified: VERIFIED, notes: "Anyone preparing or packaging products must be a Department-approved Certified Food Protection Manager; IDPH's guide notes food handler training does not qualify." },
  inspection_required: { value: false, source_url: IL_GUIDE, source_title: IL_GUIDE_TITLE, last_verified: VERIFIED, notes: "No inspection upon registration. The state or local health department may inspect (and charge a reasonable fee) after a complaint, an illness outbreak, or reason to believe a product is unsafe or noncompliant (410 ILCS 625/4(d))." },
  caveats: [
    "Home pickup is allowed unless a local law that applies equally to all cottage food operations prohibits it; in a municipality of 1,000,000 or more people, operators must also follow its laws that apply equally to all home-based businesses.",
    "Home rule units may not regulate cottage food operations in a way inconsistent with state law.",
    "Non-TCS baked goods made for sale by a religious, charitable, or nonprofit organization for fundraising are exempt from the cottage food rules.",
    "IDPH's Cottage Food Guide is a 2024 edition; Sec. 4 was last amended by Public Acts 103-903 (effective January 1, 2025) and 104-417 (effective August 15, 2025). Where they differ, the statute controls.",
  ],
  sources: [
    { title: IL_STATUTE_TITLE, url: IL_STATUTE, type: "statute" },
    { title: IL_AGENCY_TITLE, url: IL_AGENCY, type: "agency_page" },
    { title: IL_LABELING_TITLE, url: IL_LABELING, type: "official_pdf" },
    { title: IL_GUIDE_TITLE, url: IL_GUIDE, type: "guidance" },
    { title: "410 ILCS 625/3.6 (Home Kitchen Operation)", url: IL_HOME_KITCHEN, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
