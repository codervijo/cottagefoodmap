import type { StateLaw } from "../schema";

const CDPH = "https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram";
const CDPH_DOCS = "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/CottageFood";
const CA_AGENCY = `${CDPH}/CottageFoodOperations.aspx`;
const CA_TRAINING = `${CDPH}/CFOperatorTraining.aspx`;
const CA_FAQ = `${CDPH}/CFOFAQ.aspx`;
const CA_FOODS_PDF = `${CDPH_DOCS}/ApprovedCottageFoodsList.pdf`;
const CA_LABEL_PDF = `${CDPH_DOCS}/CFLabelingReq.pdf`;
const CA_CAPS_PDF = `${CDPH_DOCS}/CFOAdjustedGrossAnnualSalesLimit2026.pdf`;
const HSC = (section: string) =>
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=${section}`;
const CA_STATUTE = HSC("114365");
const VERIFIED = "2026-09-15";
const CAPS_VERIFIED = "2026-09-22";
const CA_CAPS_TITLE = "CDPH — CFO Adjusted Gross Annual Sales Limit (2026)";

export const california: StateLaw = {
  slug: "california",
  name: "California",
  abbreviation: "CA",
  program_name: { value: "Cottage Food Operation (CFO)", source_url: CA_AGENCY, source_title: "CDPH — Cottage Food Operations", last_verified: VERIFIED },
  agency: {
    value: "Local enforcement agency (county or city environmental health) registers and permits CFOs; CDPH maintains the approved cottage foods list",
    source_url: CA_AGENCY,
    source_title: "CDPH — Cottage Food Operations",
    last_verified: VERIFIED,
    notes: "CDPH does not permit or register cottage food operations.",
  },
  permit_required: {
    value: true,
    source_url: CA_STATUTE,
    source_title: "Cal. Health & Safety Code § 114365",
    last_verified: VERIFIED,
    notes: "Class A: registration plus a self-certification checklist. Class B: permit issued after an initial inspection. Both renew annually.",
  },
  permit_details: {
    value: "Two tiers. Class A: register with the local enforcement agency and submit a self-certification checklist; direct sales only; no initial or routine inspections. Class B: permit issued after an initial inspection, then no more than one inspection per year; direct and indirect sales (e.g., through retail shops and restaurants). Registrations and permits renew annually, and one county's registration or permit is valid throughout the state.",
    source_url: CA_STATUTE,
    source_title: "Cal. Health & Safety Code § 114365",
    last_verified: VERIFIED,
  },
  license_cost_usd: {
    value: "varies",
    source_url: HSC("114365.6"),
    source_title: "Cal. Health & Safety Code § 114365.6",
    last_verified: VERIFIED,
    notes: "Fees are set by the local enforcement agency; there is no state fee schedule. Local agencies may add a surcharge for Class B permits.",
  },
  sales_cap_usd_annual: {
    value: [
      { class: "Class A", base_usd: 75000, adjusted_usd: 88878, effective: "2026-01-01", source_url: CA_CAPS_PDF, source_title: CA_CAPS_TITLE, last_verified: CAPS_VERIFIED },
      { class: "Class B", base_usd: 150000, adjusted_usd: 177756, effective: "2026-01-01", source_url: CA_CAPS_PDF, source_title: CA_CAPS_TITLE, last_verified: CAPS_VERIFIED },
    ],
    source_url: HSC("113758"),
    source_title: "Cal. Health & Safety Code § 113758",
    last_verified: CAPS_VERIFIED,
    notes: "The statute sets the base limits and requires both to be adjusted each year for inflation (California CPI); CDPH publishes the adjusted limits each January.",
  },
  allowed_foods: {
    value: [
      "Baked goods without cream, custard, or meat fillings (e.g., bread, cookies, cake, fruit-only pies — no pumpkin)",
      "Candy and confections (e.g., fudge, toffee, brittles, chocolate-covered nonperishables)",
      "Extracts of at least 70 proof, listed flavors only (e.g., vanilla, lemon)",
      "Dried, dehydrated, and freeze-dried foods (e.g., baking mixes, pasta, cereals, granola, trail mixes, popcorn, roasted or freeze-dried coffee, tea, herbs and herb blends)",
      "Frostings, icings, fondants, and gum pastes without eggs, cream, or cream cheese (e.g., buttercream made with butter)",
      "Honey and sorghum syrups (pure only)",
      "Fruit butters, preserves, jams, and jellies made only from fruits listed in 21 CFR Part 150",
      "Nuts, nut mixes, and nut butters (roasted or pasteurized nuts only)",
      "Powdered beverage bases and mixes",
      "Vinegars and mustards",
    ],
    source_url: CA_FOODS_PDF,
    source_title: "CDPH — Approved Cottage Foods List (reviewed April 2026)",
    last_verified: VERIFIED,
  },
  prohibited_foods: {
    value: [
      "Any potentially hazardous food, and any food not on the approved list",
      "Baked goods with cream, custard, or meat fillings (including pumpkin pie)",
      "Frostings containing eggs (other than pasteurized or powdered), cream, or cream cheese",
      "Jams or jellies made from fruits or vegetables not listed in 21 CFR Part 150",
      "Salsa",
      "Pickles, hot sauce, and other canned low-acid or acidified foods",
    ],
    source_url: CA_FAQ,
    source_title: "CDPH — Cottage Food FAQ and Approved Cottage Foods List",
    last_verified: VERIFIED,
    notes: "Potentially hazardous foods are barred by HSC § 114365.5. Salsa, pickles, and canned foods per the CDPH FAQ; the rest follow from the approved list's stated limits.",
  },
  labeling_requirements: {
    value: [
      "\"Made in a Home Kitchen\" (or \"Repackaged in a Home Kitchen\") in 12-point type on the principal display panel",
      "Common or descriptive name of the product",
      "CFO name, city, and zip code (street address if not in a current phone directory)",
      "Registration or permit number and the name of the issuing county",
      "Ingredients in descending order of predominance by weight",
      "Net quantity in both English and metric units",
      "Plain-language declaration of major food allergens",
    ],
    source_url: CA_LABEL_PDF,
    source_title: "CDPH — Labeling Requirements for Cottage Food Products",
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
      notes: "Direct sales (in person, phone, or online) may be fulfilled in person, by mail, or by third-party delivery, within California. Indirect sales through retail shops and restaurants require a Class B permit. Direct and indirect sales are both defined as transactions within the state.",
    },
    source_url: HSC("113758"),
    source_title: "Cal. Health & Safety Code § 113758",
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: CA_TRAINING,
    source_title: "CDPH — Cottage Food Operator Training",
    last_verified: VERIFIED,
    notes: "Anyone who prepares or packages cottage food must complete a food processor course within three months of registration or permit, and every three years after.",
  },
  inspection_required: {
    value: true,
    source_url: CA_STATUTE,
    source_title: "Cal. Health & Safety Code § 114365",
    last_verified: VERIFIED,
    notes: "Class B: initial inspection, then no more than one inspection per year. Class A: no initial or routine inspections.",
  },
  caveats: [
    "Registration and permits are handled locally (county or city environmental health), so fees and forms differ by jurisdiction.",
    "CDPH's own program pages still show the unadjusted $75,000 / $150,000 limits; the 2026 inflation-adjusted figures come from CDPH's adjusted-limits document.",
  ],
  sources: [
    { title: "CDPH — Cottage Food Operations", url: CA_AGENCY, type: "agency_page" },
    { title: "CDPH — Approved Cottage Foods List", url: CA_FOODS_PDF, type: "official_pdf" },
    { title: "CDPH — Labeling Requirements for Cottage Food Products", url: CA_LABEL_PDF, type: "official_pdf" },
    { title: "CDPH — CFO Adjusted Gross Annual Sales Limits (2026)", url: CA_CAPS_PDF, type: "official_pdf" },
    { title: "CDPH — Cottage Food FAQ", url: CA_FAQ, type: "guidance" },
    { title: "Cal. Health & Safety Code § 113758 (definitions, sales limits)", url: HSC("113758"), type: "statute" },
    { title: "Cal. Health & Safety Code § 114365 (registration, permits, inspections)", url: CA_STATUTE, type: "statute" },
    { title: "Cal. Health & Safety Code § 114365.2 (training, labeling)", url: HSC("114365.2"), type: "statute" },
    { title: "Cal. Health & Safety Code § 114365.5 (cottage food products)", url: HSC("114365.5"), type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
