import type { StateLaw } from "../schema";

const TX_AGENCY_PAGE = "https://www.dshs.texas.gov/retail-food-establishments/permits-retail-food-establishments/texas-cottage-food-production";
const TX_STATUTE = "https://tcss.legis.texas.gov/docs/HS/htm/HS.437.htm";
const TX_SB541 = "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00541F.htm";
const TX_AGENCY_TITLE = "Texas DSHS — Texas Cottage Food Production";
const TX_STATUTE_TITLE = "Tex. Health & Safety Code Ch. 437";
const VERIFIED = "2026-09-15";

export const texas: StateLaw = {
  slug: "texas",
  name: "Texas",
  abbreviation: "TX",
  program_name: { value: "Cottage Food Production Operation", source_url: TX_STATUTE, source_title: `${TX_STATUTE_TITLE}, § 437.001(2-b)`, last_verified: VERIFIED },
  agency: { value: "Texas Department of State Health Services (DSHS)", source_url: TX_AGENCY_PAGE, source_title: TX_AGENCY_TITLE, last_verified: VERIFIED },
  permit_required: {
    value: false,
    source_url: TX_STATUTE,
    source_title: `${TX_STATUTE_TITLE}, § 437.0192`,
    last_verified: VERIFIED,
    notes: "No license or permit, and local governments may not require one. Operations that sell TCS (refrigerated) foods must register with DSHS.",
  },
  permit_details: {
    value: "No license or permit is required, and local health departments may not require one. DSHS registration is required for operations that sell time/temperature control for safety (TCS) foods; other operations may register to print their DSHS registration number on labels instead of a home address. Cottage food vendors that buy at wholesale must register. Operators must complete an accredited food handler course; DSHS accepts a Food Manager Certification in its place.",
    source_url: TX_AGENCY_PAGE,
    source_title: TX_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  license_cost_usd: {
    value: "none",
    source_url: TX_AGENCY_PAGE,
    source_title: TX_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Local health entities may not charge a fee to produce, sell, or sample directly to consumers. The DSHS page does not state whether DSHS registration has a fee.",
  },
  sales_cap_usd_annual: {
    value: 150000,
    source_url: TX_STATUTE,
    source_title: `${TX_STATUTE_TITLE}, § 437.001(2-b)(B)`,
    last_verified: VERIFIED,
    notes: "Raised from $50,000 by SB 541, effective September 1, 2025. DSHS adjusts the limit annually for inflation (CPI-U); no adjusted figure had been published on the official sources checked.",
  },
  allows_all_except_prohibited: true,
  allowed_foods: {
    value: [
      "Any food other than the prohibited items listed (since SB 541, effective September 1, 2025)",
      "TCS (refrigerated) foods are allowed with DSHS registration, a date-made label, and safe-handling instructions",
    ],
    source_url: TX_AGENCY_PAGE,
    source_title: TX_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Pickled, fermented, and plant-based acidified foods have extra recipe or pH-testing rules (§ 437.01951).",
  },
  prohibited_foods: {
    value: [
      "Meat, meat products, poultry, or poultry products",
      "Seafood, fish, and shellfish products",
      "Ice or ice products (shaved ice, ice cream, frozen custard, popsicles, gelato)",
      "Low-acid canned goods",
      "Products containing cannabidiol (CBD) or tetrahydrocannabinol (THC)",
      "Raw milk and raw milk products",
    ],
    source_url: TX_STATUTE,
    source_title: `${TX_STATUTE_TITLE}, § 437.001(2-b)(A)`,
    last_verified: VERIFIED,
  },
  labeling_requirements: {
    value: [
      "Name of the cottage food production operation",
      "Address, or the DSHS registration number in place of the address",
      "Common or usual name of the product",
      "Any major food allergen (e.g., eggs, tree nuts, soy, peanuts, milk, wheat, sesame)",
      "Disclosure: \"THIS PRODUCT WAS PRODUCED IN A PRIVATE RESIDENCE THAT IS NOT SUBJECT TO GOVERNMENTAL LICENSING OR INSPECTION.\"",
      "A unique batch number for pickled, fermented, or plant-based acidified products",
      "TCS foods: date made, plus the safe-handling statement in at least 12-point font",
      "Foods sold through a cottage food vendor: date made",
    ],
    source_url: TX_AGENCY_PAGE,
    source_title: `${TX_AGENCY_TITLE} (Food Labeling)`,
    last_verified: VERIFIED,
    notes: "Unpackaged foods: label information goes on an invoice or receipt.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: true,
      notes: "Sales go directly to consumers, delivered at the point of sale or a location the consumer designates, or at wholesale to a registered cottage food vendor (non-TCS foods only), who may resell at farmers' markets, farm stands, food service establishments, or retail stores. Online sales must be within Texas and personally delivered by the operator, an employee, or a household member; SB 541 removed mail order.",
    },
    source_url: TX_STATUTE,
    source_title: `${TX_STATUTE_TITLE}, §§ 437.001, 437.0194, 437.01965`,
    last_verified: VERIFIED,
  },
  training_required: { value: true, source_url: TX_AGENCY_PAGE, source_title: TX_AGENCY_TITLE, last_verified: VERIFIED, notes: "Accredited food handler course required; a Food Manager Certification is accepted instead." },
  inspection_required: { value: false, source_url: TX_AGENCY_PAGE, source_title: TX_AGENCY_TITLE, last_verified: VERIFIED, notes: "Health departments have no authority to inspect cottage food production operations." },
  caveats: [
    "State law bars local governments, including local health departments, from regulating cottage food production or requiring a permit.",
    "Pickled, fermented, and plant-based acidified foods must use a DSHS-approved or tested recipe, or each batch must be pH-tested (4.6 or below); batch records are kept for at least 12 months. Pickled cucumbers are exempt from these rules.",
  ],
  sources: [
    { title: TX_AGENCY_TITLE, url: TX_AGENCY_PAGE, type: "agency_page" },
    { title: "Texas Health & Safety Code, Chapter 437", url: TX_STATUTE, type: "statute" },
    { title: "SB 541 (89th Legislature), enrolled text", url: TX_SB541, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
