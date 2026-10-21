import type { StateLaw } from "../schema";

const MD_STATUTE = "https://mgaleg.maryland.gov/mgawebsite/laws/StatuteText?article=ghg&section=21-330.1&enactments=false";
const MD_DEFINITIONS = "https://mgaleg.maryland.gov/mgawebsite/laws/StatuteText?article=ghg&section=21-301&enactments=false";
const MD_CH320 = "https://mgaleg.maryland.gov/2026RS/Chapters_noln/CH_320_hb0535t.pdf";
const MD_HB535 = "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0535?ys=2026RS";
const MD_COMAR_27 = "https://regs.maryland.gov/us/md/exec/comar/10.15.03.27";
const MD_COMAR_02 = "https://regs.maryland.gov/us/md/exec/comar/10.15.03.02";
const MD_AGENCY = "https://health.maryland.gov/phpa/OEHFP/OFPCHS/Pages/CottageFoods.aspx";
const MD_GUIDELINES = "https://health.maryland.gov/phpa/OEHFP/OFPCHS/Documents/Updated_CF_Guidelines_2025.pdf";
const MD_FAQ = "https://health.maryland.gov/phpa/OEHFP/OFPCHS/Documents/Copy%20of%20CF%20FAQs%20Updated%20Revised_September_2025_FINAL_SBed09242025.docx%20(1).pdf";
const MD_REQUEST_FORM = "https://www.cognitoforms.com/MDH3/CottageFoodBusinessRequest";
const MD_STATUTE_TITLE = "Md. Code, Health–General § 21-330.1";
const MD_DEFINITIONS_TITLE = "Md. Code, Health–General § 21-301 (definitions)";
const MD_CH320_TITLE = "2026 Md. Laws ch. 320 (HB 535)";
const MD_COMAR_27_TITLE = "COMAR 10.15.03.27 (Farmer's Market, Bake Sales, and Cottage Food Business)";
const MD_COMAR_02_TITLE = "COMAR 10.15.03.02 (Definitions)";
const MD_AGENCY_TITLE = "Maryland Department of Health — Maryland Cottage Food Businesses";
const MD_GUIDELINES_TITLE = "MDH Office of Food Protection — Guidelines for Cottage Food Businesses (Last Updated 11/2025)";
const MD_FAQ_TITLE = "MDH Office of Food Protection — Cottage Food Frequently Asked Questions (Last Updated 11/2025)";
const MD_REQUEST_FORM_TITLE = "MDH — Cottage Food Business ID and Retail Sales Request Form";
const VERIFIED = "2026-10-21";

export const maryland: StateLaw = {
  slug: "maryland",
  name: "Maryland",
  abbreviation: "MD",
  program_name: {
    value: "Cottage Food Business",
    source_url: MD_AGENCY,
    source_title: MD_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "A cottage food business produces or packages non-potentially hazardous foods in a residential kitchen in Maryland and sells them only within the State. Law: Md. Code, Health–General §§ 21-301 and 21-330.1; rules: COMAR 10.15.03.27.",
  },
  agency: {
    value: "Maryland Department of Health (MDH), Office of Food Protection",
    source_url: MD_AGENCY,
    source_title: MD_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: false,
    source_url: MD_STATUTE,
    source_title: `${MD_STATUTE_TITLE}(b)`,
    last_verified: VERIFIED,
    notes: "A cottage food business is not required to be licensed by MDH if it complies with § 21-330.1. Before selling to a retail food store, the owner must submit the product label and food safety course documentation to MDH and wait for written notice that the requirements are met (COMAR 10.15.03.27C(6)–(7)). MDH says some local jurisdictions may have more restrictive laws or ordinances.",
  },
  permit_details: {
    value: "No license, registration, or inspection is needed to sell directly to consumers. Foods must be non-potentially hazardous, made, prepackaged, and labeled in the home kitchen, stored on the premises, and sold only in Maryland. A business may ask MDH for a unique identification number to print on labels instead of its home address, using MDH's ID and Retail Sales Request Form. To sell to a retail food store, submit the store label and proof of an ANSI-accredited, MDH-approved food safety course completed in the past 3 years through the same form; MDH reviews it and issues a compliance letter, and the business may not sell to a store until notified in writing. MDH charges no fee for the review.",
    source_url: MD_GUIDELINES,
    source_title: MD_GUIDELINES_TITLE,
    last_verified: VERIFIED,
    notes: "Retail-store requirements: COMAR 10.15.03.27C(6)–(7). \"No fee for review and no license is required\" and \"Changes in products/business locations/labeling/sales locations must receive approval\" (for the retail-store route) are from the guidelines' Appendix C decision tool. Laboratory results for products that need testing must be submitted with a retail-store or ID-number request (MDH FAQ #28). Owners must follow all applicable county and municipal laws (§ 21-330.1(e)).",
  },
  license_cost_usd: {
    value: "none",
    source_url: MD_GUIDELINES,
    source_title: `${MD_GUIDELINES_TITLE}, Appendix C`,
    last_verified: VERIFIED,
    notes: "No license fee. MDH's decision tool says there is \"No fee for review\" of retail-store requests. The food safety course required for retail-store sales and any laboratory product testing are provided by outside organizations; MDH does not set their prices.",
  },
  sales_cap_usd_annual: {
    value: 100000,
    source_url: MD_CH320,
    source_title: `${MD_CH320_TITLE}, amending Health–General § 21-301(b–1)(3)`,
    last_verified: VERIFIED,
    notes: "Annual revenues from the sale of cottage food products may not exceed $100,000, effective October 1, 2026 (raised from $50,000). DLS says the cap was raised from $25,000 to $50,000 in 2022. As of 2026-10-21, COMAR 10.15.03.02B(17-1), MDH's guidelines (11/2025), and the statute text on the General Assembly website still show $50,000.",
  },
  sales_cap_notes: {
    value: "The cap is in the statutory definition of a cottage food business: a business with annual revenues from the sale of cottage food products not exceeding $100,000. Chapter 320 was approved by the Governor on April 28, 2026 and took effect October 1, 2026.",
    source_url: MD_HB535,
    source_title: `${MD_CH320_TITLE} — bill page`,
    last_verified: VERIFIED,
  },
  food_status_overrides: {
    honey: {
      status: "unclear",
      reason: "MDH's FAQ says unflavored honey (including creamed honey) is considered a raw agricultural product and not a cottage food, and that flavored honey requires an on-farm home processing license or a processing license. Honey is regulated outside the cottage food rules rather than listed as allowed or banned.",
      sources: [
        { source_url: MD_FAQ, source_title: `${MD_FAQ_TITLE}, Q23`, last_verified: VERIFIED },
      ],
    },
  },
  allowed_foods: {
    value: [
      "Non-perishable baked goods without potentially hazardous toppings or fillings (e.g., bagels, biscuits, breads, brownies, cookies, muffins, pastries, tortillas, sourdough bread and rolls, and cakes, cupcakes, and buns without perishable icing or fillings)",
      "Pies, turnovers, and fruit tarts from fruits with a natural pH of 4.6 or less",
      "Baked doughnuts and churros with only non-potentially hazardous toppings or fillings",
      "Hot-filled fruit jams, jellies, and preserves from fruits with a natural pH of 4.6 or below (e.g., apples, apricots, blackberries, blueberries, cherries, cranberries, grapes, oranges, peaches, raspberries, strawberries)",
      "Fruit butters made only from apples, apricots, grapes, peaches, plums, prunes, or quince",
      "Fruit leathers",
      "Non-perishable candies (e.g., brittles, gummy bears, hard candies, lollipops, toffee, and marshmallows with non-potentially hazardous ingredients); freeze-dried non-potentially hazardous commercial candies",
      "Chocolate confections made from commercially manufactured chocolate or commercial non-potentially hazardous ingredients (e.g., chocolate-covered nuts, pretzels, marshmallows, dried fruits, and caramels; peanut butter cups), with all fillings from a commercial source",
      "Granola bars",
      "Whole roasted coffee beans",
      "Seasoning blends, spice blends, and tea blends repackaged from commercial ingredients",
      "Kettle corn, popcorn, popcorn balls, and nuts",
      "Cereal mixes, granola mixes, and trail mixes from commercial sources",
      "Dry bread or \"instant\" bread mixes",
      "Other non-potentially hazardous foods shown by laboratory testing to be safe at room temperature (water activity of 0.85 or less and/or pH of 4.6 or less)",
    ],
    source_url: MD_GUIDELINES,
    source_title: `${MD_GUIDELINES_TITLE}, Appendix A`,
    last_verified: VERIFIED,
    notes: "COMAR 10.15.03.27B lists the regulated categories: hot-filled acid fruit jellies, jams, preserves, and butters from listed fruits, non-potentially hazardous baked goods, and non-potentially hazardous candy. MDH's Appendix A gives examples. Baked doughnuts and churros, hard candies, and dry bread mixes are from the MDH FAQ (#27, #30, #31). Icings, glazes, and moist quick breads made with low-acid fruits or vegetables need third-party lab results for each recipe, and vendors must have copies of those results at public events (FAQ #28, #35–#37).",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous foods (foods that need refrigeration or temperature control for safety)",
      "Perishable baked goods: baked goods with perishable icings or fillings (e.g., buttercream, cream cheese, royal icing), cheesecakes, cream and custard pies, meringue cookies and pies, pumpkin, sweet potato, and pecan pies, macarons, waffles, focaccia-style breads with vegetables or cheeses, and fried doughnuts",
      "Without laboratory testing: icings and fillings made with perishable ingredients, and moist quick breads such as banana, pumpkin, and zucchini breads with a water activity above 0.85",
      "Acidified or pickled products (e.g., corn relish, pepper jelly, pickled beets, pumpkin butter, salsa)",
      "Fermented foods, except sourdough bread (e.g., kimchi, kombucha, pickles, sauerkraut, kefir, yogurt)",
      "Condiments and sauces (e.g., barbecue sauce, hot sauce, ketchup, mustard, tomato and spaghetti sauces)",
      "Low-acid canned foods; garlic or vegetable in oil mixtures",
      "Sugar-free fruit butters, jams, jellies, marmalades, preserves, and syrups",
      "Fruit butters other than apple, apricot, grape, peach, plum, prune, and quince (e.g., pear or pumpkin butter)",
      "Soft candies such as homemade caramels and homemade fudge; chocolates with homemade or potentially hazardous fillings; chocolate confections made from raw cocoa beans; chocolate- or candy-covered fresh or canned fruit",
      "Ground or flavored coffee; brewed coffee and all other beverages (e.g., apple cider)",
      "Freeze-dried products of any kind except non-potentially hazardous commercial candy; home dehydrating or freeze-drying of fruits, vegetables, vegetable chips, herbs, spices, or pasta",
      "Fresh or refrigerated pasta, raw cookie or pizza dough, and unbaked energy or protein balls",
      "Meat and poultry products (including jerky and dried or dehydrated meat), fish and shellfish, milk and dairy products, and ice products",
      "Homemade nut butters and seed butters",
      "Syrups (e.g., blueberry, elderberry, maple) and extracts",
      "Raw seed sprouts; fresh-cut fruit or vegetables; foods containing cooked or fresh-cut vegetables",
      "Prepared foods such as pizza",
      "CBD and cannabis ingredients (only hulled hemp seed, hemp seed protein, and hemp seed oil are allowed)",
      "Pet foods and treats (not covered by the cottage food rules)",
    ],
    source_url: MD_GUIDELINES,
    source_title: `${MD_GUIDELINES_TITLE}, Appendix B`,
    last_verified: VERIFIED,
    notes: "MDH gives these as examples, not a complete list. Fried doughnuts, salsas and tomato sauces, ground coffee, home dehydrating of herbs, fermented foods, prepared foods, CBD, and pet foods are from the MDH FAQ (#15–#18, #25, #26, #31, #33). Foods not allowed as cottage foods need a local health department or MDH food license.",
  },
  labeling_requirements: {
    value: [
      "Prepackaged with a label, stored on the premises of the cottage food business",
      "Name and address of the cottage food business (not a P.O. box), or the business name and phone number plus the MDH-assigned identification number",
      "Name of the cottage food product",
      "Ingredients in descending order of the amount of each ingredient by weight (MDH: including sub-ingredients)",
      "Net weight or net volume (MDH also accepts count)",
      "Allergen information as specified by federal labeling requirements",
      "Nutritional information as specified by federal labeling requirements, if any nutritional claim is made",
      "In 10 point or larger type in a color that clearly contrasts with the label background: \"Made by a cottage food business that is not subject to Maryland's food safety regulations.\"",
      "For products sold at a retail food store: the business's phone number and email address, and the date the product was made",
    ],
    source_url: MD_STATUTE,
    source_title: `${MD_STATUTE_TITLE}(c)`,
    last_verified: VERIFIED,
    notes: "Same requirements in COMAR 10.15.03.27C(1)(c). The P.O. box rule, sub-ingredients, count, and the rule that the statement must be worded exactly as in the regulations are from the MDH FAQ (#11, #12). MDH's guidelines say all labels must be in English. The phone number must let MDH reach the business within 24 hours and the email within 48 hours (COMAR 10.15.03.27C(8)–(9)).",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: true,
      notes: "Cottage food products may be sold only in Maryland: directly to a consumer from a residence, at a farmer's market, at a bake sale, at a public event, by personal delivery, or by mail order or mail delivery; or to a licensed retail food store (grocery store, convenience store, retail market, retail bakery, or food cooperative) after MDH's written approval. MDH's FAQ says sales over the Internet are restricted to Maryland only, products may be mailed only within Maryland, and distributing across State lines is not permissible. Bake sales must be connected with a fundraising event. Retail food stores exclude restaurants, coffee shops, cafeterias, and businesses without a food license. Cottage foods cannot be produced onsite at a market or event, and local rules for farmers' markets and public events may apply.",
    },
    source_url: MD_COMAR_27,
    source_title: `${MD_COMAR_27_TITLE}, §A`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: MD_FAQ,
    source_title: `${MD_FAQ_TITLE}, Q5`,
    last_verified: VERIFIED,
    notes: "Training is required only to sell to a retail food store: an MDH-approved, ANSI-accredited basic food safety course completed in the past 3 years covering basic food safety, cleaning and sanitizing, personal hygiene, pest control and prevention, and receiving, storing, preparing, and serving food (Health–General § 21-330.1(g); COMAR 10.15.03.27C(6)).",
  },
  inspection_required: {
    value: false,
    source_url: MD_FAQ,
    source_title: `${MD_FAQ_TITLE}, Q6`,
    last_verified: VERIFIED,
    notes: "No preliminary or routine inspection. On a complaint or illness report, MDH or the local health department may enter and inspect the home kitchen and collect samples, and the owner may not refuse access or interfere (Health–General § 21-330.1(f); COMAR 10.15.03.27C(4)–(5)).",
  },
  caveats: [
    "2026 Md. Laws ch. 320 (HB 535) raised the annual revenue cap from $50,000 to $100,000 effective October 1, 2026. COMAR 10.15.03.02 and MDH's cottage food guidelines (last updated 11/2025) had not been updated to the new figure when checked on 2026-10-21.",
    "Many products depend on the recipe: icings, glazes, and moist quick breads need third-party lab results for water activity and pH for each recipe, and the lab results must be available at public events.",
    "SB 838 (2026), which would have added \"home bakery\" provisions, received a Senate hearing but was not enacted.",
    "Local health, zoning, and permit rules still apply, and MDH notes that a local government may not allow home food production. Farmers' markets and public events may have their own requirements.",
    "Honey is not a cottage food in Maryland: MDH treats unflavored honey as a raw agricultural product, and flavored honey needs an on-farm home processing license or a processing license.",
    "Business licenses and sales tax are separate: MDH refers operators to their Circuit Clerk's office, Maryland Business Express, and the Comptroller.",
  ],
  sources: [
    { title: MD_DEFINITIONS_TITLE, url: MD_DEFINITIONS, type: "statute" },
    { title: MD_STATUTE_TITLE, url: MD_STATUTE, type: "statute" },
    { title: `${MD_CH320_TITLE} — Food Establishments – Cottage Food Businesses – Maximum Annual Revenue`, url: MD_CH320, type: "statute" },
    { title: `${MD_CH320_TITLE} — bill page`, url: MD_HB535, type: "statute" },
    { title: MD_COMAR_27_TITLE, url: MD_COMAR_27, type: "regulation" },
    { title: MD_COMAR_02_TITLE, url: MD_COMAR_02, type: "regulation" },
    { title: MD_AGENCY_TITLE, url: MD_AGENCY, type: "agency_page" },
    { title: MD_GUIDELINES_TITLE, url: MD_GUIDELINES, type: "official_pdf" },
    { title: MD_FAQ_TITLE, url: MD_FAQ, type: "official_pdf" },
    { title: MD_REQUEST_FORM_TITLE, url: MD_REQUEST_FORM, type: "guidance" },
  ],
  last_reviewed: VERIFIED,
};
