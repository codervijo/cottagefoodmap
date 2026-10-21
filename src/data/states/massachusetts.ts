import type { StateLaw } from "../schema";

const MA_QA = "https://www.mass.gov/info-details/residential-kitchen-questions-and-answers";
const MA_STANDARDS = "https://www.mass.gov/doc/residential-kitchen-standards/download";
const MA_CMR590 = "https://www.mass.gov/doc/105-cmr-590-state-sanitary-code-chapter-x-minimum-sanitation-standards-for-food-establishments/download";
const MA_FARM = "https://www.mass.gov/doc/guidance-for-farms-and-agricultural-businesses-on-cottage-food-and-other-food-sales-march-8-2022-0/download";
const MA_RFC_FAQ = "https://www.mass.gov/info-details/frequently-asked-questions-on-the-retail-food-code";
const BOSTON = "https://www.boston.gov/permitting/permits/retail-residential-kitchen-permit";
const MA_H5241 = "https://malegislature.gov/Bills/194/H5241";
const MA_S69 = "https://malegislature.gov/Bills/194/S69";
const MA_QA_TITLE = "MDPH Food Protection Program — Residential Kitchen Questions and Answers";
const MA_STANDARDS_TITLE = "MDPH — Retail Food Code Standards for Permitted Residential Kitchens (Updated April 2019)";
const MA_CMR590_TITLE = "105 CMR 590.000 (Massachusetts Retail Food Code), as published by MDPH";
const MA_FARM_TITLE = "MDPH — Guidance for Farms and Agricultural Businesses on Cottage Food and Other Food Sales (March 8, 2022)";
const MA_RFC_FAQ_TITLE = "MDPH — Frequently Asked Questions on the Retail Food Code";
const BOSTON_TITLE = "City of Boston Inspectional Services — Retail Residential Kitchen Permit";
const VERIFIED = "2026-10-21";

export const massachusetts: StateLaw = {
  slug: "massachusetts",
  name: "Massachusetts",
  abbreviation: "MA",
  program_name: {
    value: "Retail Residential Kitchen permit (Cottage Food Operation)",
    source_url: MA_QA,
    source_title: MA_QA_TITLE,
    last_verified: VERIFIED,
    notes: "Anyone making food in a home kitchen for sale direct to the consumer is a Retail Residential Kitchen and needs a permit under 105 CMR 590 (the Retail Food Code); these are permitted as \"Cottage Food Operations.\" Selling at wholesale (to stores or restaurants that resell) is a separate Wholesale Residential Kitchen license from MDPH under 105 CMR 500. This page covers the retail route.",
  },
  agency: {
    value: "Local board of health in the city or town where the kitchen is located (permits and inspects); Massachusetts Department of Public Health (MDPH), Food Protection Program (sets the rules)",
    source_url: MA_QA,
    source_title: MA_QA_TITLE,
    last_verified: VERIFIED,
    notes: "Retail Residential Kitchen operations are inspected and permitted by the local board of health (105 CMR 590.010(F)(2)). Wholesale Residential Kitchen operations are inspected and licensed by MDPH's Food Protection Program (105 CMR 500.015(B)). A kitchen used for both needs licenses and inspections from both.",
  },
  permit_required: {
    value: true,
    source_url: MA_CMR590,
    source_title: `${MA_CMR590_TITLE}, § 590.010(F)(2)(a)`,
    last_verified: VERIFIED,
    notes: "A cottage food operation may not sell or serve food unless it has been approved and holds a valid permit from the board of health. No permit is needed if the operation sells only whole, uncut fresh fruits and vegetables, unprocessed honey, pure maple products, or farm fresh eggs kept at 45°F or less (§ 590.010(F)(1)). Bake sales for religious or charitable organizations and food made for distribution to a charitable facility also need no permit (MDPH Q&A).",
  },
  permit_details: {
    value: "Apply to your local board of health. The board reviews the application under MDPH guidelines and the 2013 Food Code as adopted by 105 CMR 590. A permit lasts no more than one year; apply to renew at least 30 days before it expires. The board issues or renews a permit after the application is approved, the fees are paid, and an inspection shows the kitchen complies with 105 CMR 590. The kitchen must also comply with all applicable municipal laws and zoning ordinances. A private well must be tested before permitting and at least annually after. The board may require lab tests (such as pH or water activity) to show a product doesn't need temperature control.",
    source_url: MA_CMR590,
    source_title: `${MA_CMR590_TITLE}, §§ 590.008 (FC 8-303.20), 590.010(F)(2)`,
    last_verified: VERIFIED,
    notes: "Municipal laws, zoning, and well testing: MDPH Retail Food Code Standards for Permitted Residential Kitchens. Lab testing: MDPH Residential Kitchen Q&A. MDPH's farm guidance says to contact your local board of health for a permit application. Local boards may adopt stricter rules (MDPH farm guidance, note 2).",
  },
  license_cost_usd: {
    value: "varies",
    source_url: MA_CMR590,
    source_title: `${MA_CMR590_TITLE}, § 590.008 (FC 8-303.20(C))`,
    last_verified: VERIFIED,
    notes: "The permit is issued by the local board of health once \"the fees are paid\"; 105 CMR 590 and MDPH's residential kitchen guidance set no fee amount. Example: Boston (where Inspectional Services issues the permit) charges $100 per year.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: MA_CMR590,
    source_title: MA_CMR590_TITLE,
    last_verified: VERIFIED,
    notes: "No sales limit appears in 105 CMR 590, MDPH's Residential Kitchen Q&A, its Retail Food Code Standards for Permitted Residential Kitchens, or its farm guidance.",
  },
  allows_all_except_prohibited: true,
  food_status_overrides: {
    "baked-goods": {
      status: "restricted",
      reason: "Only non-time/temperature control for safety (TCS) baked goods may be made at a cottage food operation. MDPH lists cream-filled pastries, cheesecake, and custard as examples of foods a Residential Kitchen may not prepare or sell.",
      sources: [
        { source_url: MA_STANDARDS, source_title: `${MA_STANDARDS_TITLE} (Cottage Food Products)`, last_verified: VERIFIED },
        { source_url: MA_QA, source_title: MA_QA_TITLE, last_verified: VERIFIED },
      ],
    },
  },
  allowed_foods: {
    value: [
      "Baked goods that don't need time/temperature control for safety (non-TCS)",
      "Jams and jellies, including jams and jellies thermal-processed in hermetically-sealed containers",
      "Other foods that don't need time/temperature control for safety (non-TCS) — foods that can be safely held at room temperature",
      "Unprocessed honey and pure maple products (no permit needed if these, whole uncut fresh fruits and vegetables, and farm fresh eggs are all you sell)",
    ],
    source_url: MA_CMR590,
    source_title: `${MA_CMR590_TITLE}, § 590.001(C) ("Cottage Food Products")`,
    last_verified: VERIFIED,
    notes: "105 CMR 590 defines cottage food products as \"non-time/temperature control for safety baked goods, jams, jellies, and other non-time/temperature control for food safety foods.\" TCS ingredients such as milk, cream, and eggs from approved sources may be used if the final product is not a TCS food (MDPH standards). The thermal-processing exception for jams and jellies is from the MDPH Q&A. Honey and maple: § 590.010(F)(1). The regulator may require lab evidence that a product is safe without temperature control.",
  },
  prohibited_foods: {
    value: [
      "Finished products that need hot or cold holding for safety (TCS foods), including raw or heat-treated meat or fish, and certain cut produce including melons, leafy greens, and tomatoes",
      "Cream-filled pastries, cheesecake, custard, and cut fruit and vegetables",
      "Tomato and barbeque sauce, pickled products, relishes, and salad dressings",
      "Foods made by acidification, hot fill, thermal processing in hermetically-sealed containers (except as allowed above), vacuum packaging, or curing/smoking",
    ],
    source_url: MA_QA,
    source_title: MA_QA_TITLE,
    last_verified: VERIFIED,
    notes: "MDPH gives these as examples of foods a Residential Kitchen may not prepare or sell, citing 105 CMR 590.001(C) and FC 1-201.10(B). The processing ban applies to both retail and wholesale Residential Kitchens; MDPH's only exception is jams and jellies thermal-processed in hermetically-sealed containers.",
  },
  labeling_requirements: {
    value: [
      "Products must be sold prepackaged with an ingredient label, printed in English",
      "Name and address of the Cottage Food Operation",
      "Name of the cottage food product",
      "Ingredients in descending order of predominance by weight, including sub-ingredients of any prepared ingredient (e.g., \"soy sauce (wheat, soybeans, salt)\")",
      "Net weight or net volume",
      "Allergen information as specified by federal labeling requirements",
      "Nutrition labeling as specified by federal requirements, if any nutrient content claim, health claim, or other nutrition information is given",
    ],
    source_url: MA_STANDARDS,
    source_title: `${MA_STANDARDS_TITLE} (Labeling)`,
    last_verified: VERIFIED,
    notes: "The product doesn't need lab analysis to get an ingredient list. The April 2019 guidance lists the allergen groups as milk, eggs, wheat, peanuts, soybeans, fish (including shellfish, crab, lobster, or shrimp), and tree nuts.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: true,
      delivery_in_state: true,
      retail_resale: false,
      notes: "A Retail Residential Kitchen sells \"direct to the consumer,\" which MDPH says \"includes events like farmers markets, craft fairs, and sales by internet or mail.\" On out-of-state sales MDPH says only that anyone who \"wants to sell in another state should confirm that they are in compliance with both Federal law and the state laws where they are doing business.\" A cottage food operation produces \"only for sale directly to the consumer\" (105 CMR 590.001(C)); selling to a supermarket or restaurant for resale requires a separate Wholesale Residential Kitchen license from MDPH under 105 CMR 500. Local rules can be narrower: Boston, for example, bars sales at the home and sales outside Massachusetts.",
    },
    source_url: MA_QA,
    source_title: MA_QA_TITLE,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: MA_FARM,
    source_title: MA_FARM_TITLE,
    last_verified: VERIFIED,
    notes: "MDPH: establishments that produce only cottage foods \"do not need to have a Certified Food Protection Manager on staff.\" Local boards may set stricter rules; Boston requires an active Food Manager Certification and food allergen awareness training for its permit.",
  },
  inspection_required: {
    value: true,
    source_url: MA_QA,
    source_title: MA_QA_TITLE,
    last_verified: VERIFIED,
    notes: "\"Retail Residential Kitchen operations are inspected and permitted by the local board of health.\" Permit issuance and renewal require an inspection showing compliance with 105 CMR 590 (FC 8-303.20(C)).",
  },
  caveats: [
    "Massachusetts has two home-kitchen routes: a retail Cottage Food Operation permit from the local board of health (direct-to-consumer sales), and a Wholesale Residential Kitchen license from MDPH's Food Protection Program (sales to stores and restaurants). A kitchen doing both needs both.",
    "Permits, fees, and inspections are handled by each city or town's board of health, and local boards may adopt stricter rules. Check with your local board of health, and confirm that local zoning allows a home food business.",
    "MDPH says the regulator may require lab testing (pH, water activity, or other tests) to show a product is safe without temperature control, and recommends a single standardized recipe for each product.",
    "Bake sales for religious or charitable organizations need no permit if the food is not TCS and a visible placard says it was made in a kitchen not subject to inspection.",
    "Cottage food bills in the 2025–2026 session have not been enacted: H.114 and H.140 were sent to a study order (H.5241) on March 16, 2026; S.69 was reported favorably and referred to Senate Ways and Means on December 31, 2025.",
  ],
  sources: [
    { title: MA_QA_TITLE, url: MA_QA, type: "guidance" },
    { title: MA_STANDARDS_TITLE, url: MA_STANDARDS, type: "official_pdf" },
    { title: MA_CMR590_TITLE, url: MA_CMR590, type: "regulation" },
    { title: MA_FARM_TITLE, url: MA_FARM, type: "official_pdf" },
    { title: MA_RFC_FAQ_TITLE, url: MA_RFC_FAQ, type: "guidance" },
    { title: BOSTON_TITLE, url: BOSTON, type: "agency_page" },
    { title: "Mass. House Order H.5241 (194th General Court) — study order on cottage food bills H.114 and H.140", url: MA_H5241, type: "agency_page" },
    { title: "Mass. Senate Bill S.69 (194th General Court) — An Act to promote economic opportunities for cottage food entrepreneurs", url: MA_S69, type: "agency_page" },
  ],
  last_reviewed: VERIFIED,
};
