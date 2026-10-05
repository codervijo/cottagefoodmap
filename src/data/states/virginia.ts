import type { StateLaw } from "../schema";

const VA_STATUTE = "https://law.lis.virginia.gov/vacode/title3.2/chapter51/section3.2-5130/";
const VA_FAQ = "https://www.vdacs.virginia.gov/pdf/homefoodexemptionsfaq.pdf";
const VA_AGENCY = "https://www.vdacs.virginia.gov/dairy-food-and-beverage-manufacturing.shtml";
const VA_APPLICATION = "https://www.vdacs.virginia.gov/pdf/manufacturedfoodpermitapplication.pdf";
const VA_PERMIT_FAQ = "https://www.vdacs.virginia.gov/pdf/permit-faq.pdf";
const VA_HB402 = "https://lis.virginia.gov/bill-details/20261/HB402";
const VA_WORK_GROUP = "https://rga.lis.virginia.gov/Pending/1.13.2027/30044";
const VA_STATUTE_TITLE = "Va. Code § 3.2-5130 (Virginia Food and Drink Law)";
const VA_FAQ_TITLE = "VDACS — Virginia's Home Food Processing Exemptions FAQ (Rev. Jul 2026)";
const VA_AGENCY_TITLE = "VDACS — Food & Beverage Manufacturing Facilities & Warehouses";
const VA_APPLICATION_TITLE = "VDACS — Permit Application for a Food Manufacturer or Food Storage Warehouse (Rev. Jul 2026)";
const VA_PERMIT_FAQ_TITLE = "VDACS — Food Safety Program Permitting Process FAQ (July 2022)";
const VA_HB402_TITLE = "2026 Va. Acts ch. 605 (HB 402)";
const VERIFIED = "2026-10-05";

export const virginia: StateLaw = {
  slug: "virginia",
  name: "Virginia",
  abbreviation: "VA",
  program_name: {
    value: "Home Food Processing Exemptions",
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Virginia's cottage food rules are exemptions in Va. Code § 3.2-5130(C)(3)–(5): low-risk foods, pickles and acidified vegetables, and honey made in the resident's private home. Home food businesses making anything else need a VDACS permit and inspection.",
  },
  agency: {
    value: "Virginia Department of Agriculture and Consumer Services (VDACS), Food Safety Program",
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: false,
    source_url: VA_STATUTE,
    source_title: `${VA_STATUTE_TITLE}(D)`,
    last_verified: VERIFIED,
    notes: "Private homes that qualify for an exemption are exempt from the permit and inspection requirements and the inspection fees. Home operations making foods outside the exemptions, or selling beyond them, must get a VDACS Food Safety Program permit.",
  },
  permit_details: {
    value: "No permit, registration, or inspection for exempt home food processing. Foods must be on the statute's list, made in the producer's own private home, not need time or temperature control after preparation, and be sold only to individuals in Virginia for their own consumption. To make other foods or sell beyond the exemption (for example, to stores, restaurants, or out of state), apply for a VDACS Food Safety Program permit: submit the application at least 60 days before opening, pass a preoperational inspection, and pay a $40 annual inspection fee.",
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Permit steps from VDACS's Food Manufacturer permit application (Rev. Jul 2026). VDACS recommends checking local planning, zoning, and business license requirements.",
  },
  license_cost_usd: {
    value: "none",
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Exempt home food processing operations do not pay VDACS's $40 annual inspection fee. Permitted (inspected) home food processors pay the $40 annual inspection fee; VDACS charges no separate fee for the permit itself.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: VA_STATUTE,
    source_title: `${VA_STATUTE_TITLE}(C)(3)`,
    last_verified: VERIFIED,
    notes: "No sales limit for exempt low-risk foods (baked goods, candies, jams, dry goods, etc.). Pickles and other acidified vegetables are capped at $9,000 in gross sales per calendar year (§ 3.2-5130(C)(4)). Exempt honey is limited to under 250 gallons a year (§ 3.2-5130(C)(5)).",
  },
  sales_cap_notes: {
    value: "The $9,000 cap applies to total annual gross sales of all acidified vegetable products; the honey limit is less than 250 gallons sold per year. VDACS says producers should document sales on an ongoing basis so records are available for review.",
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
  },
  allowed_foods: {
    value: [
      "Baked goods that don't need time or temperature control (e.g., cookies, fruit pies, muffins, sourdough bread, and breads or cakes not filled or topped with fresh fruit, fruit curd, custard, whipped cream, mousse, or cream cheese)",
      "Jams and jellies not considered low-acid or acidified low-acid foods (e.g., blueberry, grape, peach, strawberry)",
      "Candies, cotton candy, popcorn, and popcorn balls",
      "Dried fruits",
      "Dry herbs, dry seasonings, and dry mixtures",
      "Dry baking mixes",
      "Coated and uncoated nuts",
      "Vinegars and flavored vinegars",
      "Dried pasta",
      "Roasted coffee beans and grounds",
      "Dried tea",
      "Cereals, trail mixes, and granola",
      "Pickles and other acidified vegetables with a finished equilibrium pH of 4.6 or below (e.g., pickled vegetables, relishes, chow-chow, acidified salsa), up to $9,000 in gross sales a year",
      "Pure honey from the resident's own hives, under 250 gallons sold a year",
    ],
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "The statute lists the exempt foods (Va. Code § 3.2-5130(C)(3)–(5)). VDACS's examples are not exhaustive: whether a product qualifies depends on its recipe, and some products need lab testing by a food processing authority to show they are not TCS foods.",
  },
  prohibited_foods: {
    value: [
      "Foods that need time or temperature control for safety (TCS) after preparation (e.g., cut fruits, cut leafy greens, cut vegetables, some cheeses, fruit-based fillings or toppings, cream cheese-based frostings)",
      "Breads with fresh toppings or inclusions such as cheese, herbs, or vegetables; breads or cakes filled or topped with fresh fruit, fruit curd, custard, whipped cream, mousse, or cream cheese; cheesecakes, cream pies, custards, and meringues",
      "Apple butter, banana jam, fig jam, lavender jelly, pepper jelly, and zucchini or carrot cake jam; low-sugar or no-sugar jams and jellies may also not qualify, depending on the recipe",
      "Barbecue sauces, hot sauces, salad dressings, and fresh salsa",
      "Canned acid foods, canned fermented foods, canned fruits, low-acid canned vegetables, and canned foods that need refrigeration for safety",
      "Value-added honey products (e.g., infused honey, hot honey, honey ice cream, mead)",
    ],
    source_url: VA_FAQ,
    source_title: VA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "VDACS gives these as examples that may not be allowed under the exemptions; the final call depends on each recipe. Foods not on the statutory list need a VDACS permit.",
  },
  labeling_requirements: {
    value: [
      "On the principal display panel: name, physical address or post office box number, and telephone number of the person preparing the food",
      "The date the food was processed",
      "\"NOT FOR RESALE — PROCESSED AND PREPARED WITHOUT STATE INSPECTION\"",
      "If the package is too small for a label, a sign at the point of sale with the same information",
      "Standard labeling: product name, net weight, name and address of the manufacturer, ingredients and sub-ingredients, and possibly nutrition information",
      "Exempt honey: \"PROCESSED AND PREPARED WITHOUT STATE INSPECTION. WARNING: Do Not Feed Honey to Infants Under One Year Old.\"",
    ],
    source_url: VA_STATUTE,
    source_title: `${VA_STATUTE_TITLE}(C)(3)–(5)`,
    last_verified: VERIFIED,
    notes: "The standard labeling requirements (product name, net weight, ingredients, etc.) come from the VDACS Home Food Processing Exemptions FAQ. VDACS also accepts a sign for products sold to be eaten on site.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: "not_authorized",
      delivery_in_state: true,
      retail_resale: false,
      notes: "Exempt foods may be sold at any location, through the internet, or by phone, and delivered in person, by mail, or by delivery service — only to an individual in Virginia for his own consumption. No sales for resale or consignment, for use in retail food establishments, to other businesses, or across state lines. VDACS says there are currently no restrictions on where or how exempt honey is sold.",
    },
    source_url: VA_STATUTE,
    source_title: `${VA_STATUTE_TITLE}(C)(3)–(4)`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: VA_STATUTE,
    source_title: VA_STATUTE_TITLE,
    last_verified: VERIFIED,
    notes: "The home food processing exemptions contain no training requirement, and VDACS's exemptions FAQ names none.",
  },
  inspection_required: {
    value: false,
    source_url: VA_STATUTE,
    source_title: `${VA_STATUTE_TITLE}(D)`,
    last_verified: VERIFIED,
    notes: "Exempt private homes are exempt from VDACS permit and inspection requirements, but VDACS may inspect if it receives a consumer complaint. Permitted home food processors get a preoperational inspection and are subject to unannounced inspections and sampling.",
  },
  caveats: [
    "Virginia has two routes for home food businesses: the permit-free exemptions in Va. Code § 3.2-5130(C)(3)–(5), and a VDACS Food Safety Program permit with inspection and a $40 annual inspection fee for anything else.",
    "2026 Va. Acts ch. 605 (HB 402), effective July 1, 2026, amended the exemptions to cover sales at any location, by internet or phone, and delivery in person, by mail, or by delivery service within Virginia.",
    "HB 402 also directs VDACS to convene a Home Food Processing Operator Work Group on standards for home processors whose products fall outside the exemptions; its report is due by the start of the 2027 General Assembly session. Rules may change after that.",
    "Pickles and acidified vegetables need a finished equilibrium pH of 4.6 or below; VDACS requires a separate pH test for each product and says paper strips are not accurate enough.",
    "VDACS says products containing meat are regulated by its Office of Meat and Poultry Services.",
    "Local zoning and business license rules still apply; check with your locality.",
  ],
  sources: [
    { title: VA_STATUTE_TITLE, url: VA_STATUTE, type: "statute" },
    { title: VA_FAQ_TITLE, url: VA_FAQ, type: "official_pdf" },
    { title: VA_AGENCY_TITLE, url: VA_AGENCY, type: "agency_page" },
    { title: VA_APPLICATION_TITLE, url: VA_APPLICATION, type: "official_pdf" },
    { title: VA_PERMIT_FAQ_TITLE, url: VA_PERMIT_FAQ, type: "guidance" },
    { title: `${VA_HB402_TITLE} — cottage food laws; sale of certain food over phone and internet; work group`, url: VA_HB402, type: "statute" },
    { title: "Report to the General Assembly (pending): Home Food Processing Operator Work Group", url: VA_WORK_GROUP, type: "agency_page" },
  ],
  last_reviewed: VERIFIED,
};
