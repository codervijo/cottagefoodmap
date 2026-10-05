import type { StateLaw } from "../schema";

const WA_STATUTE = "https://app.leg.wa.gov/RCW/default.aspx?cite=69.22&full=true";
const WA_RULE = "https://app.leg.wa.gov/WAC/default.aspx?cite=16-149&full=true";
const WA_AGENCY = "https://agr.wa.gov/cottagefood";
const WA_APPLICATION = "https://cms.agr.wa.gov/WSDAKentico/Documents/Forms/2093-ApplicationForCottageFoodOperationPermit.pdf";
const WA_OVERVIEW = "https://cms.agr.wa.gov/WSDAKentico/Documents/FSCS/Food%20Safety/WSDA-What-is-the-Cottage-Foods-Permit-2025.pdf";
const WA_STATUTE_TITLE = "RCW Ch. 69.22 (Cottage Food Operations)";
const WA_RULE_TITLE = "WAC Ch. 16-149 (Cottage Food Operations)";
const WA_AGENCY_TITLE = "Washington State Dept. of Agriculture — Cottage Food";
const WA_APPLICATION_TITLE = "WSDA Application for Cottage Food Operation Permit (AGR-2093, R/8/23)";
const WA_OVERVIEW_TITLE = "WSDA — What is the Cottage Foods Permit? (2025)";
const VERIFIED = "2026-10-05";

export const washington: StateLaw = {
  slug: "washington",
  name: "Washington",
  abbreviation: "WA",
  program_name: {
    value: "Cottage Food Operation Permit",
    source_url: WA_RULE,
    source_title: `${WA_RULE_TITLE}, WAC 16-149-020`,
    last_verified: VERIFIED,
    notes: "Authorized by the Washington Cottage Food Operator Act (RCW Ch. 69.22, enacted 2011).",
  },
  agency: {
    value: "Washington State Department of Agriculture (WSDA), Food Safety Program",
    source_url: WA_AGENCY,
    source_title: WA_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: true,
    source_url: WA_STATUTE,
    source_title: `${WA_STATUTE_TITLE}, RCW 69.22.030(1)`,
    last_verified: VERIFIED,
    notes: "All cottage food operations must be permitted by WSDA every two years. Operating without a valid permit is a misdemeanor (RCW 69.22.090). Permitted operations are not subject to local health jurisdiction permitting and inspection (RCW 69.22.100).",
  },
  permit_details: {
    value: "Apply to WSDA with a premises diagram, recipes and processing steps, a label for every product, proposed sale locations, proof of potable water (a passing bacterial test within 60 days for a private well), a copy of each worker's food worker card, and pet or child control plans if needed. Applications are limited to 50 master recipes. WSDA reviews recipes and labels, then inspects the kitchen before issuing the permit. The permit lists the specific products you may make, is valid for two years, applies only to the applicant's primary residence, and must be posted at every point of sale. A master business license and compliance with local zoning are required before permitting.",
    source_url: WA_RULE,
    source_title: `${WA_RULE_TITLE}, WAC 16-149-030 to -060`,
    last_verified: VERIFIED,
    notes: "WSDA says the process averages 6–8 weeks from a complete application to permit issuance, and the permit is not transferable if you move (WSDA Cottage Food page). Adding products between renewals needs an amendment ($105, WSDA page); products can also be added at renewal at no extra fee.",
  },
  license_cost_usd: {
    value: 355,
    source_url: WA_AGENCY,
    source_title: WA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "$355 for a two-year permit, nonrefundable once received. By statute and rule the fee is made up of a $75 public health review fee, a $30 processing fee, and a $125 inspection fee for each annual inspection (RCW 69.22.030(1), 69.22.040(3); WAC 16-149-060(2)); WSDA's 2025 overview says the fee changed in July 2023 from $230 a year to $355 every two years. A failed opening inspection costs $125 for a re-inspection.",
  },
  sales_cap_usd_annual: {
    value: 35000,
    source_url: WA_STATUTE,
    source_title: `${WA_STATUTE_TITLE}, RCW 69.22.050(1)`,
    last_verified: VERIFIED,
    notes: "Annual gross sales of cottage food products may not exceed $35,000 (set by 2023 c 352; WAC 16-149-040 and WSDA's page state the same figure). Every four years WSDA must review the cap and raise it by expedited rule making based on the Seattle-area CPI; no increase had been adopted in WAC 16-149-040 as of verification.",
  },
  sales_cap_notes: {
    value: "The cap is per domestic residence, not per person. If sales exceed it, the operation must stop selling or get a WSDA food processing plant license, with no refund of permit fees. WSDA may ask in writing for records verifying gross sales, and operators must keep documentation of gross sales and off-site sale locations.",
    source_url: WA_STATUTE,
    source_title: `${WA_STATUTE_TITLE}, RCW 69.22.050`,
    last_verified: VERIFIED,
    notes: "Recordkeeping: WAC 16-149-100(1)(f).",
  },
  allowed_foods: {
    value: [
      "Baked and fried goods cooked in an oven, on a stovetop, or in an electric cooking device: loaf breads, rolls, biscuits, quick breads, and muffins; cakes, including birthday, anniversary, and wedding cakes; pastries and scones; cookies and bars; crackers; donuts, tortillas, pizzelles, krumkake, kale chips, and similar products",
      "Pies, except custard-style pies, pies with unbaked fresh fruit, and pies that need refrigeration after baking",
      "Sweet breads made with fresh fruit or vegetables, if the produce is mixed into the batter and oven-baked",
      "Frostings and glazes that have a cook step or are shelf-stable because of their ingredients (e.g., a large amount of sugar)",
      "Cereals, trail mixes, and granola; nuts and nut mixes; snack mixes",
      "Candies cooked on a stovetop or in a microwave, using a candy thermometer: molded candies and chocolates, candy- or chocolate-coated products, fudge, caramels, nut brittles, taffy, and marshmallow-like candies",
      "Standardized jams, jellies, preserves, and fruit butters (21 CFR 150), with a cook step and sealed in sterilized containers",
      "Dry herbs, seasonings, and mixtures from approved sources, recombined and packaged (e.g., dry teas, bread mixes, soup mixes, dip mixes, spice blends)",
      "Small-batch roasted coffee beans, using a roaster that generally fits on a kitchen countertop",
      "Vinegars from approved sources, rebottled, with added flavors such as fruits and herbs",
      "Vanilla extract that meets FDA's standard of identity (21 CFR 169.175)",
      "Low-risk freeze-dried foods (e.g., candy) made from allowed products",
    ],
    source_url: WA_AGENCY,
    source_title: WA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Statutory definition: nonpotentially hazardous baked goods, candies, standardized jams, jellies, preserves, and fruit butters, plus other foods the director identifies in rule (RCW 69.22.010(2)); the rule list is WAC 16-149-120. The list is not all-inclusive, but you may only make the specific products WSDA approves and lists on your permit, following the exact approved recipe. Coffee roasting, vanilla extract, kale chips, and freeze-dried foods are from WSDA's page and 2025 overview, not the rule text. No ingredient with 0.3% THC or more.",
  },
  prohibited_foods: {
    value: [
      "Fresh or dried meat or meat products, including jerky",
      "Fresh or dried poultry or poultry products",
      "Fish or shellfish products, and products made with meat, poultry, or fish",
      "Canned fruits, vegetables, vegetable butters, salsas, etc.",
      "Canned pickled products such as corn relish, pickles, and sauerkraut",
      "Raw seed sprouts",
      "Bakery goods that need any refrigeration, such as cream, custard, or meringue pies and cakes or pastries with cream or cream cheese fillings, fresh fruit fillings or garnishes, low-sugar glazes or frostings, cream, or uncooked eggs",
      "Milk and dairy products, including hard, soft, and cottage cheeses and yogurt",
      "Cut fresh fruits or vegetables, and food products made from them",
      "Garlic-in-oil mixtures",
      "Juices made from fresh fruits or vegetables, and all other beverages (including beer and cider)",
      "Ice or ice products",
      "Barbecue sauces, ketchups, or mustards",
      "Focaccia-style breads with vegetables or cheeses",
      "Syrups",
      "Freeze-dried high-risk foods (e.g., fruit, ice cream), and foods dried in a low-temperature dehydrator",
      "Food not for human consumption, such as dog treats",
    ],
    source_url: WA_AGENCY,
    source_title: WA_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Rule list: WAC 16-149-130 (not all-inclusive). WSDA's FAQ adds that low-sugar jams, home-canned salsas and pickles, syrups, beverages, low-temperature dehydrated products, pet treats, and raw milk or raw cream ingredients are not allowed; its 2025 overview lists freeze-dried high-risk foods.",
  },
  labeling_requirements: {
    value: [
      "Business name and WSDA permit number of the cottage food operation (home address not required)",
      "Name of the product",
      "Ingredients in descending order of predominance by weight, including sub-ingredients",
      "Net weight or net volume (metric not required)",
      "Allergen information as required by federal labeling rules",
      "Nutrition information as required by federal rules, if a nutritional claim is made",
      "\"Made in a Home Kitchen that has not been subject to standard inspection criteria.\" in at least 11-point type, in a color that contrasts with the background",
    ],
    source_url: WA_RULE,
    source_title: `${WA_RULE_TITLE}, WAC 16-149-110`,
    last_verified: VERIFIED,
    notes: "Labels must be in English and products must be prepackaged. Large cakes and bulk containers may instead come with a product label sheet and be protected from contamination in transport. Every label must be submitted with the application. WSDA adds that products containing alcohol must say \"This product contains liquor and the alcohol content is one percent or less of the weight of the product.\"",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: "not_authorized",
      delivery_in_state: true,
      retail_resale: false,
      notes: "Only direct, in-state sales from the operator to the consumer: from home, at farmers markets, craft fairs, charitable organization functions, and other public venues, and from the operator's own retail space. Orders may be taken and paid for online, but the product must be picked up from or delivered in person by the permit holder within Washington. No shipping, mail order, courier or third-party delivery, consignment, wholesale, or sales to restaurants, grocery stores, brokers, or distributors, and no sales outside Washington. Products cannot be used as ingredients by a food processing plant or sold by a food service establishment.",
    },
    source_url: WA_RULE,
    source_title: `${WA_RULE_TITLE}, WAC 16-149-040(2)`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: WA_RULE,
    source_title: `${WA_RULE_TITLE}, WAC 16-149-030(6)`,
    last_verified: VERIFIED,
    notes: "Before permitting, the operator must complete a food safety training program and hold a valid food worker card. By statute, everyone involved in preparing cottage food products must have a food and beverage service worker's permit (food worker card) under RCW Ch. 69.06 (RCW 69.22.030(2)). WSDA says food worker cards come through your local health department and third-party websites aren't accepted.",
  },
  inspection_required: {
    value: true,
    source_url: WA_STATUTE,
    source_title: `${WA_STATUTE_TITLE}, RCW 69.22.040(1)`,
    last_verified: VERIFIED,
    notes: "WSDA inspects the permitted area for basic hygiene before the first permit and annually after, and may inspect any time in response to a foodborne outbreak or other public health emergency; the rule adds complaints and suspected violations (WAC 16-149-090). Inspections may be announced or unannounced (WAC 16-149-050(4)). Two failed opening inspections mean the application is denied.",
  },
  caveats: [
    "Your permit covers only the specific products and recipes WSDA approved; new products need an amendment or must be added at renewal.",
    "Local zoning and business-from-home rules still apply, and a Washington master business license is required.",
    "Recipes and everything else in the application are public records.",
    "No pets, and no children under six, in the kitchen during production; pet or child control plans may be required.",
    "Ingredients and products must be stored in the home, not a detached garage, shed, barn, or other outbuilding.",
    "HB 2703 (2026 session), which would add extracts such as vanilla to the statutory cottage food definition, was still in committee as of October 5, 2026.",
  ],
  sources: [
    { title: WA_AGENCY_TITLE, url: WA_AGENCY, type: "agency_page" },
    { title: WA_OVERVIEW_TITLE, url: WA_OVERVIEW, type: "official_pdf" },
    { title: WA_APPLICATION_TITLE, url: WA_APPLICATION, type: "official_pdf" },
    { title: WA_STATUTE_TITLE, url: WA_STATUTE, type: "statute" },
    { title: WA_RULE_TITLE, url: WA_RULE, type: "regulation" },
  ],
  last_reviewed: VERIFIED,
};
