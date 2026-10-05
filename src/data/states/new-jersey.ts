import type { StateLaw } from "../schema";

const NJ_HOME = "https://www.nj.gov/health/cottagefood/";
const NJ_APPLY = "https://www.nj.gov/health/cottagefood/apply-renew/";
const NJ_APPROVED = "https://www.nj.gov/health/cottagefood/food-products/approved/";
const NJ_PROHIBITED = "https://www.nj.gov/health/cottagefood/food-products/prohibited/";
const NJ_LABELING = "https://www.nj.gov/health/cottagefood/requirements/labeling/";
const NJ_FPM = "https://www.nj.gov/health/cottagefood/requirements/food-protection-manager-certification/";
const NJ_RULES = "https://www.nj.gov/health/cottagefood/rules-resources/rules/";
const NJ_FAQ = "https://www.nj.gov/health/cottagefood/rules-resources/faq/";
const NJ_FORM = "https://www.nj.gov/health/forms/cfo-1.pdf";
const NJ_HOME_TITLE = "New Jersey Dept. of Health — Cottage Food Operator Permit";
const NJ_APPLY_TITLE = "NJDOH — Cottage Food: Apply/Renew";
const NJ_APPROVED_TITLE = "NJDOH — Cottage Food: Approved Food Products";
const NJ_PROHIBITED_TITLE = "NJDOH — Cottage Food: Prohibited Food Products";
const NJ_LABELING_TITLE = "NJDOH — Cottage Food: Labeling";
const NJ_FPM_TITLE = "NJDOH — Cottage Food: Food Protection Manager Certification";
const NJ_RULES_TITLE = "N.J.A.C. 8:24-11 (Cottage Food Operators), as published by NJDOH";
const NJ_FAQ_TITLE = "NJDOH — Cottage Food: Frequently Asked Questions";
const VERIFIED = "2026-10-05";

export const newJersey: StateLaw = {
  slug: "new-jersey",
  name: "New Jersey",
  abbreviation: "NJ",
  program_name: {
    value: "Cottage Food Operator Permit",
    source_url: NJ_HOME,
    source_title: NJ_HOME_TITLE,
    last_verified: VERIFIED,
    notes: "The permit lets a New Jersey resident sell certain non-TCS foods made in their home kitchen directly to consumers. Rules: N.J.A.C. 8:24-11.",
  },
  agency: {
    value: "New Jersey Department of Health (NJDOH), Public Health and Food Protection Program",
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.1(b)`,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: true,
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.1(a)`,
    last_verified: VERIFIED,
    notes: "Anyone producing, distributing, or selling food to consumers must have a Cottage Food Operator Permit or comply with the laws for retail food establishments. The permit is only for New Jersey residents.",
  },
  permit_details: {
    value: "First confirm with your local zoning board that a cottage food business is allowed in your home. Then email NJDOH (cfo@doh.nj.gov) the CFO-1 application form, a product questionnaire for each product, frosting, and filling (ingredients, recipe steps, ingredient sources, and the product label), a copy of your Food Protection Manager certificate, proof of water potability (a recent water bill, or a total coliform test of private well water sampled within 60 days), and the $100 payment confirmation. NJDOH says review takes 16 weeks. The permit is valid for two years; renew at least 45 days before it expires. Adding products later needs a new full application and fee.",
    source_url: NJ_APPLY,
    source_title: NJ_APPLY_TITLE,
    last_verified: VERIFIED,
    notes: "Application contents: N.J.A.C. 8:24-11.1(b). Permit term and renewal: § 8:24-11.6. Adding products and non-transferability on moving: NJDOH FAQ. Operators must also follow local laws of their municipality (§ 8:24-11.1(e)).",
  },
  license_cost_usd: {
    value: 100,
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.6`,
    last_verified: VERIFIED,
    notes: "$100 nonrefundable application fee; renewal is also $100. The permit is valid for two years. Adding products to an existing permit requires a new application and another $100 fee (NJDOH FAQ). The required Food Protection Manager course is offered by outside accredited organizations; its cost is not set by NJDOH.",
  },
  sales_cap_usd_annual: {
    value: 50000,
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.3(b)`,
    last_verified: VERIFIED,
    notes: "Gross annual sales (before taxes and operating expenses) from cottage food products may not exceed $50,000. Bills pending in the 2026–2027 session would raise this (A5229: $100,000; S4648: $150,000); neither has been enacted.",
  },
  food_status_overrides: {
    "pickles-and-fermented": {
      status: "prohibited",
      reason: "NJDOH's approved product list includes no pickled, fermented, or acidified foods, and its prohibited ingredients list bars vegetables (fresh, cooked, fried, or dried) and peppers; applications with prohibited ingredients are denied. Hot sauce, barbecue sauce, and tomato ketchup or sauce are excluded from the vinegar and mustard category.",
    },
  },
  allowed_foods: {
    value: [
      "Baked goods (e.g., bread, rolls, cakes, cupcakes, pastries, cookies, brownies, muffins, scones, cake pops, biscuits, macarons, babka, doughnuts, cake rolls)",
      "Fruit pies, fruit empanadas, and fruit tamales made with cooked fruit (e.g., apple, peach, blueberry, strawberry)",
      "Candy (e.g., brittle, toffee, bark, caramels, marshmallows, chocolates, candy bars, cereal treats, packaged cotton candy)",
      "Fudge (cooked)",
      "Chocolate-covered nuts and dried fruit",
      "Dried fruit (e.g., raisins, apricots, prunes, dates, dried cranberries)",
      "Dried herbs and seasonings, and mixtures thereof (e.g., seasoning mixes, barbecue rub), purchased from a licensed facility or wholesale distributor",
      "Dried pasta (wheat, no egg)",
      "Dry baking mixes (e.g., pancake, cookie, cake, and brownie mixes)",
      "Fruit jams, fruit jellies, and fruit preserves",
      "Granola, cereal, and trail mix",
      "Processed honey (including infused or flavored honey with no particles) and sweet sorghum syrup",
      "Nuts and nut mixtures",
      "Nut butters (e.g., peanut, almond, walnut)",
      "Popcorn and caramel corn",
      "Roasted coffee and dried tea (tea purchased from a licensed facility or wholesale distributor)",
      "Vinegar (infused or flavored with no particles) and mustard",
      "Waffle cones and pizzelles",
      "Other non-TCS foods, on written application to NJDOH",
    ],
    source_url: NJ_APPROVED,
    source_title: NJ_APPROVED_TITLE,
    last_verified: VERIFIED,
    notes: "The cottage food product definition (reproduced in NJDOH's FAQ) lists these categories plus \"other non-TCS food\" on written application. For an unlisted product, the operator must show it is non-TCS, e.g. with a lab shelf-life analysis or NJDOH product review. NJDOH reviews every product, frosting, and filling before approving it. All ingredients must come from approved, licensed sources.",
  },
  prohibited_foods: {
    value: [
      "Time/temperature control for safety (TCS) foods",
      "Foods containing prohibited ingredients: cream, sour cream, custard, vegan custard, puddings, cheese, cream cheese, meat, fish, vegetables (fresh, cooked, fried, or dried), fresh flowers, fresh herbs, peppers, fresh fruit, pumpkin, sweet potato, yams, carrots, heat-treated plant food (cooked rice, beans, vegetables), mushrooms, tofu, soy protein foods, alcohol, CBD, THC, and home-grown or foraged plants, herbs, vegetables, or fruits",
      "Cheesecake, cheese- or cream-filled pastries, and baked goods with alcohol or CBD; French toast, pancakes, waffles, crepes, cannoli, and focaccia with vegetables or mushrooms",
      "Pumpkin, sweet potato, yam, rhubarb, vegetable, meat, pecan, key lime, and lemon pies; fresh fruit tarts and pies with fresh or uncooked fruit",
      "Icings and frostings made with cream cheese, meringue (including Swiss meringue), buttercream (including French and German buttercream), whipped cream, or ganache",
      "Cotton candy made or spun on site, chocolate-covered fresh fruit (e.g., chocolate-covered strawberries), candy apples, and candied fruits or vegetables",
      "Freeze-dried or machine-dehydrated fruits and vegetables; dried bananas, plantains, and strawberries; banana or plantain chips; dried mushrooms and dried beans",
      "Pepper jelly, rhubarb jelly, and tomato jelly",
      "Fruit butters (e.g., apple, guava, fig), sesame butter, tahini, and nut butters with alcohol",
      "Dried egg noodles, pasta with egg, raw pizza dough, and raw cookie dough",
      "Infused or flavored honey with floating particles; elderberry syrup and flower syrups",
      "Hot sauce, barbecue sauce, tomato ketchup or sauce, egg-based mustards, infused oils, red wine and balsamic vinegar, and vinegars or mustards with alcohol",
      "Liquid beverages, and fresh, home-grown, or foraged herbs, flowers, or teas",
      "Dog treats and pet food",
    ],
    source_url: NJ_PROHIBITED,
    source_title: NJ_PROHIBITED_TITLE,
    last_verified: VERIFIED,
    notes: "Ingredient list and icing/frosting list from NJDOH's Prohibited Food Products page; product-specific exclusions from its Approved Food Products page; pet food from the NJDOH FAQ. NJDOH says freeze-drying or dehydrating machines are not allowed because they can't reliably lower moisture to a safe level.",
  },
  labeling_requirements: {
    value: [
      "Common name of the product",
      "Ingredients in descending order of predominance by weight",
      "\"Contains\" followed by any major food allergens (milk, eggs, fish, crustacean shellfish, tree nuts, wheat, peanuts, soybeans, sesame)",
      "Operator's full name, business name, and Cottage Food Operator Permit number",
      "Municipality where the food is prepared (the operator's residence on record), followed by \"New Jersey\" or \"NJ\"",
      "\"This food is prepared pursuant to N.J.A.C. 8:24-11 in a home kitchen that has not been inspected by the Department of Health.\"",
    ],
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.4(c)`,
    last_verified: VERIFIED,
    notes: "NJDOH says the statement must be printed word for word and a business name alone is not enough. When selling somewhere other than the operator's or consumer's home, the operator must display the permit and a placard with the same statement (§ 8:24-11.4(b)). Unpackaged items such as cupcakes need at least one tag with the full label information (NJDOH FAQ).",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Products may be handed only to the consumer, in New Jersey: at the operator's home (not for onsite consumption), at the consumer's home, at a New Jersey farmers' market or farm stand, at a New Jersey temporary retail food establishment such as a craft or street fair, or at another New Jersey location where the law allows it. Orders, payments, and marketing may be handled online, by phone, or by mail, but the product must be delivered in person in New Jersey. No shipping by mail or common carrier, no couriers or third-party delivery services, and no sales outside New Jersey. No sales to retail food establishments or wholesale establishments, and no pop-ups at existing retail food establishments. Events and markets need a local temporary food permit.",
    },
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, §§ 8:24-11.2(b), 11.3(a)`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: NJ_RULES,
    source_title: `${NJ_RULES_TITLE}, § 8:24-11.1(b)2`,
    last_verified: VERIFIED,
    notes: "Applicants must submit a certificate showing they are a food protection manager in good standing with an accredited program. NJDOH requires Food Protection Manager certification, not Food Handler, from a New Jersey accredited organization, and checks that it is still valid at renewal. NJDOH does not offer the course.",
  },
  inspection_required: {
    value: false,
    source_url: NJ_FAQ,
    source_title: NJ_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "\"Home kitchens are not inspected by the Department of Health.\" The permit authorizes distribution without initial or periodic inspection (§ 8:24-11.2(a)), but a health authority may enter the home kitchen to confirm compliance or investigate complaints (§ 8:24-11.5).",
  },
  caveats: [
    "Check with your local zoning board first: NJDOH won't approve an application if local zoning bars a home cottage food business.",
    "NJDOH approves products one by one; each product, frosting, and filling must be listed and reviewed, and adding products later requires a new application and fee.",
    "Raw, unprocessed honey is not a cottage food and doesn't need the permit, per NJDOH; processed and flavored honey do.",
    "Selling at farmers markets, fairs, and other events also needs local permits from the local health department.",
    "Bills introduced in 2026 would change the program but have not been enacted: A5229 (introduced June 8, 2026) would raise the cap to $100,000 and set a 21-business-day review deadline; S4648 (introduced October 1, 2026) would raise it to $150,000 and allow in-state mailing and sales to retail and wholesale establishments.",
  ],
  sources: [
    { title: NJ_HOME_TITLE, url: NJ_HOME, type: "agency_page" },
    { title: NJ_APPLY_TITLE, url: NJ_APPLY, type: "agency_page" },
    { title: NJ_APPROVED_TITLE, url: NJ_APPROVED, type: "guidance" },
    { title: NJ_PROHIBITED_TITLE, url: NJ_PROHIBITED, type: "guidance" },
    { title: NJ_LABELING_TITLE, url: NJ_LABELING, type: "guidance" },
    { title: NJ_FPM_TITLE, url: NJ_FPM, type: "guidance" },
    { title: NJ_FAQ_TITLE, url: NJ_FAQ, type: "guidance" },
    { title: NJ_RULES_TITLE, url: NJ_RULES, type: "regulation" },
    { title: "NJDOH Form CFO-1 — Application for Cottage Food Operator Permit (Jul 2025)", url: NJ_FORM, type: "official_pdf" },
  ],
  last_reviewed: VERIFIED,
};
