import type { StateLaw } from "../schema";

const GA_AGENCY = "https://agr.georgia.gov/cottage-food";
const GA_FAQ = "https://agr.georgia.gov/cottage-food-faq";
const GA_HB398_FAQ = "https://agr.georgia.gov/sites/default/files/documents/assets/Cottage-Food-Update-HB398-Frequently-Asked-Questions.pdf";
const GA_HB398 = "https://agr.georgia.gov/sites/default/files/documents/assets/HB-398-Cottage-Food-Law-OCGA-26-2-470-et-seq-Under-Revision.pdf";
const GA_HB398_LEGIS = "https://www.legis.ga.gov/api/legislation/document/20252026/232078";
const GA_ID_FORM = "https://agr.georgia.gov/sites/default/files/documents/assets/Identification-Number-Registration-Form.pdf";
const GA_RULES = "https://rules.sos.ga.gov/gac/40-7-19";
const GA_AGENCY_TITLE = "Georgia Dept. of Agriculture — Cottage Food";
const GA_FAQ_TITLE = "Georgia Dept. of Agriculture — Cottage Food FAQ";
const GA_HB398_FAQ_TITLE = "GDA — Cottage Food Update: House Bill 398 & FAQ";
const GA_HB398_TITLE = "HB 398 (2025), O.C.G.A. § 26-2-470 et seq.";
const VERIFIED = "2026-09-25";

export const georgia: StateLaw = {
  slug: "georgia",
  name: "Georgia",
  abbreviation: "GA",
  program_name: {
    value: "Cottage Food Program",
    source_url: GA_AGENCY,
    source_title: GA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Before HB 398 (effective July 1, 2025), operators needed a GDA Cottage Food License. HB 398 removed the license; the law now covers \"cottage food operators\" (O.C.G.A. § 26-2-470).",
  },
  agency: {
    value: "Georgia Department of Agriculture (GDA), Retail Food section",
    source_url: GA_AGENCY,
    source_title: GA_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: false,
    source_url: GA_HB398_FAQ,
    source_title: GA_HB398_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Since HB 398 took effect July 1, 2025, operators no longer need a GDA license. Local business licensing and zoning still apply.",
  },
  permit_details: {
    value: "No state license is required since HB 398 took effect on July 1, 2025. Operators who don't want their home address on labels may request a GDA Identification Number to use instead. Local business licenses and zoning rules still apply, and some farmers markets may require vendors to hold a Food Sales Establishment License.",
    source_url: GA_HB398_FAQ,
    source_title: GA_HB398_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Identification Number: O.C.G.A. § 26-2-473(a)(1)(B) and GDA's registration form. Farmers market licenses: GDA Cottage Food FAQ.",
  },
  license_cost_usd: {
    value: "none",
    source_url: GA_HB398_FAQ,
    source_title: GA_HB398_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "No state license or state licensing fee since July 1, 2025. The old $100/year fee still appears in Rule 40-7-19-.04, which GDA says it will amend; GDA uses enforcement discretion in the meantime. The Identification Number form does not mention a fee.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: GA_FAQ,
    source_title: GA_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "GDA has no limits on gross sales or on the number of units produced. HB 398 sets no sales cap.",
  },
  food_status_overrides: {
    honey: {
      status: "unclear",
      reason: "GDA's Cottage Food FAQ says honey and syrup are not considered cottage foods, because state regulatory requirements and exemptions for them differ, and refers producers to GDA's Food Safety Division. Honey is regulated outside the cottage food program; the FAQ doesn't say whether home honey sales are allowed.",
    },
    "pickles-and-fermented": {
      status: "restricted",
      reason: "HB 398 lists dill pickles among non-potentially hazardous foods (O.C.G.A. § 26-2-470(7)). GDA's Cottage Food FAQ says cooked vegetable products such as salsas and tomato sauces do not qualify. Other pickled or fermented foods are not named.",
    },
  },
  allowed_foods: {
    value: [
      "Baked goods such as loaf breads, rolls, biscuits, and cakes (except those whose fillings require refrigeration or have high moisture content)",
      "Jams, jellies, and preserves (except fruit butters whose commercial sterility may be affected by reduced sugar or pectin levels)",
      "Uncut fruits and vegetables",
      "Dried fruits",
      "Dry herbs, seasonings, and mixtures",
      "Cereals, trail mixes, and granola",
      "Coated and uncoated nuts",
      "Vinegars and flavored vinegars",
      "Dill pickles",
      "Confections",
      "Fudge",
      "Dry soup mixes",
      "Roasted coffee beans",
      "Dry pasta",
      "Popcorn, popcorn balls, and cotton candy",
    ],
    source_url: GA_HB398,
    source_title: `${GA_HB398_TITLE}, § 26-2-470(7)`,
    last_verified: VERIFIED,
    notes: "The statutory list \"includes, but is not limited to\" these items: any non-potentially hazardous food or nonalcoholic beverage made at the producer's home can qualify. GDA's cottage food page also lists pastries, cookies, candies, and fruit pies.",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous foods that require temperature control for safety",
      "Baked goods whose fillings require refrigeration or have high moisture content",
      "Fruit butters whose commercial sterility may be affected by reduced sugar or pectin levels",
      "Alcoholic beverages",
      "Foods containing cannabis",
      "Raw milk",
    ],
    source_url: GA_HB398,
    source_title: `${GA_HB398_TITLE}, § 26-2-470(2), (7), (8)`,
    last_verified: VERIFIED,
    notes: "GDA's FAQ gives examples of potentially hazardous foods: meat, poultry, fish, shellfish, eggs, milk and dairy products, cooked plant-based foods, mushrooms, raw sprouts, tofu, and untreated garlic-in-oil mixtures.",
  },
  labeling_requirements: {
    value: [
      "Business name, address, and telephone number of the cottage food operator",
      "A GDA-issued identification number may be used in place of the address",
      "Statement in at least 10-point font: \"This product was produced at a residential property that is exempt from state inspection. This product may contain allergens.\"",
      "Where the information goes: a label on packaged items or bulk containers, a placard at the point of sale for unpackaged items, or the webpage for online sales",
      "Telephone or custom orders: the seller may instead tell the consumer the item was made at a residential property exempt from state inspection and may contain allergens, and must provide the other information on request",
      "Items sold by a third-party vendor must be displayed in a separate, conspicuously labeled section or case",
    ],
    source_url: GA_HB398,
    source_title: `${GA_HB398_TITLE}, § 26-2-473`,
    last_verified: VERIFIED,
    notes: "GDA's Rule 40-7-19-.09 (not yet amended for HB 398) also requires the common name, ingredients in descending order by weight, net weight or volume, and FDA allergen labeling; GDA's Identification Number form says allergen declarations are still required by law and regulation. The rule's older statement (\"MADE IN A COTTAGE FOOD OPERATION THAT IS NOT SUBJECT TO STATE FOOD SAFETY INSPECTIONS\") differs from the HB 398 statement.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: "not_authorized",
      delivery_in_state: true,
      retail_resale: true,
      notes: "Georgia law allows sales directly to a person, including online and by mail order, or to retail food sales establishments such as grocery stores and restaurants. A city or county may ban sales through third-party vendors by ordinance, but may not bar commercial delivery companies from delivering cottage foods. GDA says online sales go to end consumers within Georgia; interstate sales may fall under FDA oversight, which would require a license GDA cannot issue for a home kitchen. Farmers markets may require vendors to hold a Food Sales Establishment License.",
    },
    source_url: GA_HB398,
    source_title: `${GA_HB398_TITLE}, §§ 26-2-472, 26-2-478, 36-60-33`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: GA_AGENCY,
    source_title: GA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "An ANSI-accredited food safety course is required; Food Handler training is acceptable. HB 398 itself doesn't mention training.",
  },
  inspection_required: {
    value: false,
    source_url: GA_HB398_FAQ,
    source_title: GA_HB398_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "GDA no longer does pre-licensing home inspections. It may inspect the areas of the home used for cottage food to investigate a complaint, foodborne illness, or public health emergency, normally scheduled in advance (O.C.G.A. § 26-2-476).",
  },
  caveats: [
    "HB 398 changed Georgia's cottage food law on July 1, 2025. GDA's rules (Ga. Comp. R. & Regs. 40-7-19) and parts of its FAQ still describe the old licensed program, including a $100 fee, end-consumer-only sales, and a no-beverages rule; GDA says it will amend the rules and uses enforcement discretion where they conflict with HB 398.",
    "Cities and counties may ban cottage food sales through stores and restaurants by ordinance; otherwise they may not regulate cottage foods. Local business licenses and zoning still apply.",
    "Stores and restaurants that sell cottage foods must post GDA-specified signage that the products are not subject to commercial food regulation or inspection.",
    "Homes on a private well: GDA says well water should be tested at least annually for coliform bacteria and nitrates.",
  ],
  sources: [
    { title: GA_AGENCY_TITLE, url: GA_AGENCY, type: "agency_page" },
    { title: GA_FAQ_TITLE, url: GA_FAQ, type: "guidance" },
    { title: GA_HB398_FAQ_TITLE, url: GA_HB398_FAQ, type: "official_pdf" },
    { title: "HB 398 (2025) as passed, O.C.G.A. § 26-2-470 et seq. (GDA copy)", url: GA_HB398, type: "statute" },
    { title: "HB 398 (2025), Georgia General Assembly text", url: GA_HB398_LEGIS, type: "statute" },
    { title: "GDA — Cottage Food Identification Number Registration Form", url: GA_ID_FORM, type: "official_pdf" },
    { title: "Ga. Comp. R. & Regs. Subject 40-7-19 (Cottage Food Regulations)", url: GA_RULES, type: "regulation" },
  ],
  last_reviewed: VERIFIED,
};
