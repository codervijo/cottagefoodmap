import type { StateLaw } from "../schema";

const IN_STATUTE = "https://iga.in.gov/ic/2026/Title_16/Article_42/Chapter_5.3.pdf";
const IN_HOMESTEAD_STATUTE = "https://iga.in.gov/ic/2026/Title_16/Article_42/Chapter_5.4.pdf";
const IN_HANDBOOK = "https://www.in.gov/dA/be6be4f727/Indiana-Home-Based-Vendor-Handbook-2.pdf";
const IN_MEMO = "https://secure.in.gov/isda/files/idoh-homestead-and-small-farm-guidance.pdf";
const IN_GUIDANCE = "https://www.in.gov/health/food-protection/retail/guidance-documents";
const IN_HEA1149 = "https://www.in.gov/dA/703f07a68a/HB-1149-Home-Based-Vendors-002.pdf";
const IN_HEA1424 = "https://iga.in.gov/pdf-documents/124/2026/house/bills/HB1424/HB1424.05.ENRS.pdf";
const IN_STATUTE_TITLE = "Ind. Code ch. 16-42-5.3 (Home Based Food Products), Indiana Code 2026";
const IN_HOMESTEAD_STATUTE_TITLE = "Ind. Code ch. 16-42-5.4 (Regulation of Community Producers), Indiana Code 2026";
const IN_HANDBOOK_TITLE = "Indiana Department of Health — Indiana Home-Based Vendor Handbook (Summer 2025)";
const IN_MEMO_TITLE = "Indiana Department of Health — Farm and Homestead Food Sales memorandum to local health departments (May 26, 2026)";
const IN_GUIDANCE_TITLE = "Indiana Department of Health — Food Protection: Guidance Documents";
const IN_HEA1149_TITLE = "2022 Ind. Acts P.L. 49 (HEA 1149), as published by IDOH";
const IN_HEA1424_TITLE = "2026 Ind. Acts P.L. 163 (HEA 1424), enrolled act";
const VERIFIED = "2026-10-21";

export const indiana: StateLaw = {
  slug: "indiana",
  name: "Indiana",
  abbreviation: "IN",
  program_name: {
    value: "Home-Based Vendor (HBV)",
    source_url: IN_HANDBOOK,
    source_title: IN_HANDBOOK_TITLE,
    last_verified: VERIFIED,
    notes: "Indiana's home-based vendor rules are in Ind. Code ch. 16-42-5.3, added by HEA 1149 (2022), which replaced the 2009 farmers market and roadside stand exemption. A home-based vendor prepares and sells non-TCS food made in their primary residence. Since July 1, 2026, Ind. Code ch. 16-42-5.4 adds a separate homestead vendor and small farm route (see caveats); IDOH says the home-based vendor statutes remain in force.",
  },
  agency: {
    value: "Indiana Department of Health (IDOH), Division of Food Protection; enforced by local health departments",
    source_url: IN_HANDBOOK,
    source_title: IN_HANDBOOK_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: false,
    source_url: IN_STATUTE,
    source_title: `${IN_STATUTE_TITLE}, §§ 16-42-5.3-3, 16-42-5.3-12`,
    last_verified: VERIFIED,
    notes: "Home-based vendor production and sales are exempt from the requirements that apply to food establishments, and a local unit of government may not require any licensure, certification, or inspection of a home-based vendor's foods. IDOH: \"HBVs do not require food permitting by law.\"",
  },
  permit_details: {
    value: "No permit, license, or registration. A home-based vendor must get a food handler certificate from an ANSI-accredited certificate issuer and give a copy to the local health department in the county where they live. Foods must be made at the vendor's primary residence, not need time or temperature control for safety, be prepared using proper sanitary procedures, be labeled, and be sold only to the end consumer in Indiana.",
    source_url: IN_STATUTE,
    source_title: `${IN_STATUTE_TITLE}, §§ 16-42-5.3-4, 16-42-5.3-7`,
    last_verified: VERIFIED,
    notes: "IDOH strongly encourages vendors to contact their local health department to confirm a product can be made under IC 16-42-5.3. HBV rules only exempt operators from food-related licensing and inspections; IDOH advises checking local zoning and municipal rules for home businesses.",
  },
  license_cost_usd: {
    value: "none",
    source_url: IN_HANDBOOK,
    source_title: `${IN_HANDBOOK_TITLE}, FAQ`,
    last_verified: VERIFIED,
    notes: "IDOH: \"HBVs do not require food permitting by law,\" so there is no permit fee; IC 16-42-5.3-12 bars local governments from requiring licensure. The required ANSI-accredited food handler course is offered by outside providers (IDOH names Purdue Extension among them); its cost is not set by the state.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: IN_MEMO,
    source_title: IN_MEMO_TITLE,
    last_verified: VERIFIED,
    notes: "IDOH's comparison table lists home-based vendors with \"No annual gross income restrictions\"; Ind. Code ch. 16-42-5.3 sets no sales limit. The separate homestead vendor and small farm route (Ind. Code ch. 16-42-5.4) is limited to $1,500,000 in gross sales a year.",
  },
  allows_all_except_prohibited: true,
  allowed_foods: {
    value: [
      "Any food product that is not a time temperature control for safety (TCS) food, made at the vendor's primary residence",
      "Baked goods that are not TCS (e.g., cakes, cupcakes, cake pops, cookies, breads, bagels, sourdough, pretzels, quick bread, scones, baklava, kolache, muffins), with icing only if commercially prepared or from a science-based academic recipe and classified as non-TCS",
      "Pies with high acid fruits or fillings, and pecan pies; pastries and doughnuts filled with commercially prepared jam or homemade high acid fruit jam",
      "Jams, jellies, preserves, and high acid fruit curds made with recipes using only acidic fruits, sugar, and pectin",
      "Canned acid fruits in glass jars with no added ingredients outside of high acid fruits and simple syrups",
      "Candy (e.g., hard candy, cotton candy, candy apples, caramel apples), fudge, and chocolates (e.g., truffles, ganache, hot chocolate bombs)",
      "Honey (raw, creamed, combed, or infused with GRAS ingredients) and maple syrup",
      "Dehydrated and dried fruits (all varieties except melons); freeze-dried fruits and confectionery items no larger than a small marble",
      "Dried herbs, spices, and teas (air or oven dried without additional additives)",
      "Baking mixes (cake, cookies, or bread)",
      "Granola and trail mix",
      "Dried pasta and egg noodles",
      "Roasted coffee beans (whole or ground), packaged",
      "Candied, roasted, and toasted nuts and seeds; nut butters",
      "Chips (corn, potato, vegetable), crackers, and flavored or salted popcorn",
    ],
    source_url: IN_HANDBOOK,
    source_title: IN_HANDBOOK_TITLE,
    last_verified: VERIFIED,
    notes: "The statute has no list of allowed foods: a home-based vendor may prepare and sell only food that is not a time temperature control for safety food (Ind. Code § 16-42-5.3-4(2), as amended by P.L.151-2024). The examples are from IDOH's handbook, which says its list \"is neither complete nor all-inclusive\"; for an unlisted product, contact the local health department or Purdue University Extension FEMI. Some products need pH or water activity testing.",
  },
  prohibited_foods: {
    value: [
      "Time/temperature control for safety (TCS) foods, including raw or heat-treated animal foods, heat-treated plant foods, raw seed sprouts, cut melon, cut leafy greens, cut tomatoes, and garlic-in-oil",
      "Meat (all varieties including tallow) and other raw or cooked animal protein",
      "Dairy products (except commercial dairy products used only as an ingredient) and raw milk",
      "Prepared foods (e.g., casseroles, charcuterie boards, fruit salads, lasagna, ready-made meals)",
      "Cheesecake; cream, custard, meringue, sweet potato, pumpkin, and vegetable pies; fruit tarts; pumpkin roll unless the icing is commercially prepared or from a science-based academic recipe and non-TCS",
      "Low-acid or low-sugar jams, jellies, and preserves (e.g., pepper jelly, fig preserves, or those made with peppers, tomatoes, or mint)",
      "Pickles, relish, chow chow, chutney, marinades, and other acidified or pickled foods",
      "Fermented foods (e.g., kimchi, sauerkraut) and kombucha",
      "Homemade hot sauce and BBQ sauce; low-acid vegetables, fruits, dressings, and sauces",
      "Freeze-dried, dehydrated, or dried vegetables and dairy (subject to additional regulatory requirements)",
      "Cooked vegetables, boiled peanuts, and processed (cut, sliced, or diced) mushrooms",
      "Cold brew coffee, fresh-pressed juice, and products containing 0.5% or more alcohol by volume",
      "CBD, Delta 8, and Delta 9 products; homemade extracts (e.g., vanilla extract); dietary supplements",
      "Aluminum canned goods and repackaged bulk pre-packaged foods",
      "Pet treats and animal feed",
    ],
    source_url: IN_HANDBOOK,
    source_title: IN_HANDBOOK_TITLE,
    last_verified: VERIFIED,
    notes: "IDOH's handbook lists these as TCS foods or as products not considered HBV products, and says the list is not all-inclusive. Its FAQ answers \"No\" to pickled or acidified foods, fermented food, from-scratch barbecue or hot sauce, supplements, and homemade vanilla extract. Pet food is regulated by the Office of Indiana State Chemist; meat and meat fillings by the Board of Animal Health.",
  },
  labeling_requirements: {
    value: [
      "Name and address of the producer (IDOH: the vendor's primary residence address; a PO Box does not meet the requirement)",
      "Common or usual name of the food product",
      "Ingredients in descending order by predominance by weight",
      "Net weight or volume by standard measure or numerical count",
      "The date the food product was processed",
      "In at least 10 point type: \"This product is home produced and processed and the production area has not been inspected by the Indiana Department of Health. NOT FOR RESALE.\"",
      "A label for packaged food, or a sign for unpackaged food",
      "The label of each food product posted on the vendor's website",
    ],
    source_url: IN_STATUTE,
    source_title: `${IN_STATUTE_TITLE}, § 16-42-5.3-5`,
    last_verified: VERIFIED,
    notes: "Statement wording is from the current statute (amended by P.L.56-2023, which replaced \"state department of health\" with \"Indiana Department of Health\"); IDOH's 2025 handbook still prints the older \"State Department of Health\" wording. IDOH says allergen labeling is not required but highly encouraged, and that each packaged item needs a label.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Food must be sold in person, by telephone, or through the Internet, and delivered to the end consumer in person, by mail, or by a third party carrier. A home-based vendor may not ship or deliver to an end consumer outside Indiana. Products may not be resold: no sales to a warehouse, retail food establishment, wholesaler, or anyone who will distribute them further. IDOH lists farmers markets, events, and roadside stands as HBV sale locations; a farmers market cannot require a food license but may ask for the food handler certificate, and event organizers may bar HBV goods. IDOH says the producer must make in-person sales themselves (products cannot be sold on their behalf) and may sell from another business only while physically present. Shipped or delivered food must be in a tamper-evident sealed package, and the vendor must keep each customer's shipping or delivery address for at least one year.",
    },
    source_url: IN_STATUTE,
    source_title: `${IN_STATUTE_TITLE}, §§ 16-42-5.3-4, 16-42-5.3-6`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: IN_STATUTE,
    source_title: `${IN_STATUTE_TITLE}, § 16-42-5.3-7`,
    last_verified: VERIFIED,
    notes: "A home-based vendor must obtain a food handler certificate from an issuer accredited by the American National Standards Institute (ANSI), give a copy to the local health department in their county, and show it on request to IDOH or a customer.",
  },
  inspection_required: {
    value: false,
    source_url: IN_HANDBOOK,
    source_title: IN_HANDBOOK_TITLE,
    last_verified: VERIFIED,
    notes: "\"HBVs are not subject to routine inspections or product sampling.\" A home-based vendor is subject to food sampling and inspection if IDOH finds a product misbranded or adulterated or receives a consumer complaint, and IDOH may order production and sales stopped for an imminent health hazard (Ind. Code § 16-42-5.3-8).",
  },
  caveats: [
    "Since July 1, 2026, Indiana has a second route: homestead vendors and small farms under Ind. Code ch. 16-42-5.4 (2026 P.L. 163, HEA 1424). It covers meat products, prepared foods including baked goods, candy, produce, natural sweeteners, and fruit spreads, sold directly to the end consumer at the vendor's property or a farmers market, with gross sales up to $1,500,000 a year. State and local agencies may not impose rules or licensing beyond federal law but may investigate foodborne illness complaints. Shipping or delivery requires an ANSI-accredited food handler certificate and stays within Indiana, and labels carry a different statement. This page describes the home-based vendor route.",
    "IDOH's May 2026 memo says the home-based vendor statutes (IC 16-42-5.3) remain in force alongside the new homestead and small farm categories, and that many homestead prepared foods may be subject to federal USDA FSIS rules.",
    "Indiana's 2024 law (P.L.151-2024) replaced \"potentially hazardous food\" with \"time temperature control for safety food\" in the home-based vendor chapter; IDOH's handbook uses the TCS terms.",
    "Whether a product qualifies can depend on its recipe; IDOH says some products need pH or water activity testing, done once in triplicate and repeated when the formula changes.",
    "Local governments may not require licensure or inspection of home-based vendor foods, but local zoning and home business rules may still apply, and farmers markets and events may set their own product rules.",
    "Food handler courses are offered by outside ANSI-accredited providers; their cost is not set by the state.",
  ],
  sources: [
    { title: IN_STATUTE_TITLE, url: IN_STATUTE, type: "statute" },
    { title: IN_HANDBOOK_TITLE, url: IN_HANDBOOK, type: "official_pdf" },
    { title: IN_MEMO_TITLE, url: IN_MEMO, type: "guidance" },
    { title: IN_GUIDANCE_TITLE, url: IN_GUIDANCE, type: "agency_page" },
    { title: IN_HOMESTEAD_STATUTE_TITLE, url: IN_HOMESTEAD_STATUTE, type: "statute" },
    { title: `${IN_HEA1424_TITLE} — Farm and Homestead Food Sales`, url: IN_HEA1424, type: "statute" },
    { title: `${IN_HEA1149_TITLE} — home based vendors`, url: IN_HEA1149, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
