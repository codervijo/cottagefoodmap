import type { StateLaw } from "../schema";

const MI_STATUTE = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-289-4102";
const MI_DEFS = "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-289-1105";
const MI_AGENCY = "https://www.michigan.gov/mdard/food-dairy/cottage-food";
const MI_FAQ = "https://www.michigan.gov/mdard/food-dairy/cottage-food/getting-started-faq";
const MI_FOODS = "https://www.michigan.gov/mdard/food-dairy/cottage-food/what-can-i-make";
const MI_LABELING = "https://www.michigan.gov/mdard/food-dairy/cottage-food/labeling";
const MI_SELLING = "https://www.michigan.gov/mdard/food-dairy/cottage-food/selling-and-samples";
const MI_ONE_PAGER = "https://www.michigan.gov/mdard/-/media/Project/Websites/mdard/documents/food-dairy/cottage/Cottage-Food-One-Pager.pdf";
const MI_STATUTE_TITLE = "Mich. Comp. Laws § 289.4102 (Michigan Food Law)";
const MI_DEFS_TITLE = "Mich. Comp. Laws § 289.1105 (Michigan Food Law definitions)";
const MI_AGENCY_TITLE = "Michigan Dept. of Agriculture & Rural Development — Cottage Food";
const MI_FAQ_TITLE = "MDARD — Cottage Food: Getting Started and FAQ";
const MI_FOODS_TITLE = "MDARD — Cottage Food: What Can I Make?";
const MI_LABELING_TITLE = "MDARD — Cottage Food: Labeling";
const MI_SELLING_TITLE = "MDARD — Cottage Food: Selling and Samples";
const VERIFIED = "2026-09-25";

export const michigan: StateLaw = {
  slug: "michigan",
  name: "Michigan",
  abbreviation: "MI",
  program_name: { value: "Cottage Food Operation", source_url: MI_DEFS, source_title: `${MI_DEFS_TITLE}, (j)`, last_verified: VERIFIED, notes: "MDARD calls the program the \"Cottage Food exemptions\" to the Michigan Food Law (2000 PA 92)." },
  agency: { value: "Michigan Department of Agriculture and Rural Development (MDARD)", source_url: MI_FAQ, source_title: MI_FAQ_TITLE, last_verified: VERIFIED, notes: "MDARD has regulatory responsibility for the cottage food exemptions." },
  permit_required: {
    value: false,
    source_url: MI_STATUTE,
    source_title: `${MI_STATUTE_TITLE}(1)`,
    last_verified: VERIFIED,
    notes: "Cottage food operations are exempt from the Food Law's licensing and evaluation provisions. Voluntary registration with the MSU Product Center lets an operation print a registration number and phone number on labels instead of its home address.",
  },
  permit_details: {
    value: "No license, permit, application, or registration from MDARD. Products must be non-TCS foods made and stored in the kitchen of the operator's primary residence in Michigan. Operators may optionally register with the MSU Product Center to use a registration number on labels instead of a home address. Local ordinances, zoning, and other state and federal laws still apply.",
    source_url: MI_FAQ,
    source_title: MI_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "Optional registration and local-ordinance rule: MCL 289.4102(7)–(9).",
  },
  license_cost_usd: {
    value: "none",
    source_url: MI_SELLING,
    source_title: MI_SELLING_TITLE,
    last_verified: VERIFIED,
    notes: "No license, registration, or inspection. The optional MSU Product Center registration may carry a one-time fee of up to $50 (MCL 289.4102(8)(b)); the actual fee charged was not confirmed.",
  },
  sales_cap_usd_annual: {
    value: [
      { class: "Standard", base_usd: 50000, adjusted_usd: 50000, effective: "2026-03-24", source_url: MI_STATUTE, source_title: `${MI_STATUTE_TITLE}(5)`, last_verified: VERIFIED },
      { class: "Products priced $250 or more per unit", base_usd: 75000, adjusted_usd: 75000, effective: "2026-03-24", source_url: MI_STATUTE, source_title: `${MI_STATUTE_TITLE}(5)`, last_verified: VERIFIED },
    ],
    source_url: MI_STATUTE,
    source_title: `${MI_STATUTE_TITLE}(5)`,
    last_verified: VERIFIED,
    notes: "Gross sales, per person at a residence. Limits in effect since 2025 PA 51 took effect March 24, 2026. Starting October 1, 2026, MDARD may adjust both limits each October 1 for inflation (Detroit CPI).",
  },
  sales_cap_notes: {
    value: "The cap is per cottage food operator, not per household: two operators living in the same residence may each sell up to the limit. Operators must keep sales records and provide them to MDARD on request.",
    source_url: MI_FAQ,
    source_title: MI_FAQ_TITLE,
    last_verified: VERIFIED,
  },
  food_status_overrides: {
    honey: {
      status: "restricted",
      reason: "MDARD lists flavored honey as an allowed cottage food, but says honey and maple syrup are not considered cottage foods; they have their own licensing exemptions under the Food Law.",
    },
  },
  allowed_foods: {
    value: [
      "Baked goods that don't need refrigeration: cookies, breads, quick breads, muffins, cakes (including wedding and birthday cakes), and shelf-stable pies, including cooked fruit pies",
      "Fruit jams and jellies (as defined in 21 CFR part 150) in glass jars that can be stored at room temperature",
      "Confections and candies made without alcohol (e.g., hard candies, cotton candy, maple candy, freeze-dried candy, chocolate-covered pretzels or fruit)",
      "Flavored honey and flavored maple syrups",
      "Granola, dry herbs and herb mixtures, dry baking mixes, dry dip mixes, dry soup mixes, and dry bread mixes",
      "Dehydrated or freeze-dried fruits and vegetables (except melon, tomato, or leafy greens)",
      "Dried pasta, with or without eggs",
      "Dry tea mixes, powdered drink mixes, and dried herbal teas sold as conventional food with no health claims",
      "Ground coffee or roasted coffee beans",
      "Coated or uncoated nuts, and nut butters made from ground nuts (e.g., peanut or almond butter)",
      "Popcorn",
      "Vinegar and flavored vinegars",
      "Oils flavored with dried herbs or spices only (no garlic)",
      "Flavoring extracts (e.g., vanilla extract)",
      "Icings and frostings made only with shelf-stable ingredients; buttercream only from one of MDARD's two approved tested recipes",
      "Vegetable or herb chips (e.g., kale chips) and raw or dried mushrooms (wild-foraged mushrooms need expert identification)",
    ],
    source_url: MI_FOODS,
    source_title: MI_FOODS_TITLE,
    last_verified: VERIFIED,
    notes: "The statute defines a cottage food product as any food that doesn't need time/temperature control for safety, and names jams, jellies, dried fruit, candy, cereal, granola, dry mixes, vinegar, dried herbs, and baked goods as examples (MCL 289.1105(k)). MDARD's list identifies many allowed items; contact MDARD about items not listed.",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous (TCS) foods that need time/temperature control for safety",
      "Pies, cakes, and cheesecakes that need refrigeration (e.g., banana cream, pumpkin, lemon meringue, custard pies), and frostings that need refrigeration, such as cream cheese frosting",
      "Breads with fresh or frozen vegetables, soft cheese, or large chunks of hard cheese",
      "Beverages, including juices, kombucha, apple cider, concentrates, and ready-to-drink beverages such as lemonade",
      "Confections that contain alcohol (e.g., truffles or liqueur-filled chocolates), and caramel apples",
      "Simple syrups and elderberry syrups",
      "Sauces and condiments (e.g., barbecue sauce, hot sauce, ketchup, mustard), salad dressings, salsas, tomato and spaghetti sauces, and hummus",
      "Fruit butters and vegetable butters (e.g., apple butter, pumpkin butter)",
      "Vegetable jams or jellies (e.g., hot pepper jelly), low-sugar or no-sugar jams or jellies, and other non-fruit jams or jellies",
      "Oils flavored with fresh herbs, fresh fruits or vegetables, or garlic",
      "Canned, acidified, or pickled foods (e.g., pickles, sauerkraut, corn relish, pickled beets, canned peaches)",
      "Fermented foods and beverages (e.g., kombucha, olives, sourdough starter)",
      "Ice and ice products, and foods that need refrigeration such as ice cream",
      "Meat and fish products, including jerky, smoked fish, and dried or dehydrated meats",
      "Milk and dairy products (e.g., cheese, yogurt)",
      "Fresh pasta",
      "Freeze-dried or dehydrated melon, tomatoes, leafy greens, sourdough starter, dairy, or foods that need refrigeration before freeze-drying",
      "Cut tomatoes, chopped or shredded leafy greens, raw seed sprouts, and foods made with cooked vegetables",
      "Dietary supplements, tinctures, and herbal teas with dosing instructions or health claims",
      "CBD, cannabis, or foods containing them",
      "Pet food or treats",
      "Plain honey and maple syrup (not cottage foods; covered by separate Food Law exemptions)",
    ],
    source_url: MI_FOODS,
    source_title: MI_FOODS_TITLE,
    last_verified: VERIFIED,
    notes: "By statute, cottage foods exclude foods regulated under 21 CFR parts 108, 113, and 114 (including salsa), canned low-acid fruits or acidified vegetables, and other canned foods except standardized jams, jellies, and preserves (MCL 289.1105(k)).",
  },
  labeling_requirements: {
    value: [
      "Name and physical address of the operation (no P.O. boxes), or — if registered with the MSU Product Center — name, telephone number, and registration number",
      "Name of the product",
      "Ingredients in descending order of predominance by weight, including sub-ingredients of prepared items",
      "Net weight or net volume, with the metric equivalent",
      "Allergen labeling as required by federal law",
      "Nutrition labeling as required by federal law if a nutritional claim is made",
      "\"Made in a home kitchen that has not been inspected by the Michigan Department of Agriculture & Rural Development\" in at least 11-point type, in a color that contrasts with the background",
    ],
    source_url: MI_STATUTE,
    source_title: `${MI_STATUTE_TITLE}(3)`,
    last_verified: VERIFIED,
    notes: "Products must be prepackaged and labeled before sale. MDARD adds: no P.O. boxes, metric net quantity, and for wedding or specialty cakes that can't be labeled, the label information goes on an invoice delivered with the cake (MDARD labeling page).",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: true,
      retail_resale: false,
      notes: "Michigan only, directly from the operator to the consumer — for example at farmers markets, farm stands, and roadside stands. Internet, mail-order, and third-party delivery-platform sales are allowed only if the consumer can first interact with the operator directly (face to face or by live video) and only to consumers in Michigan. No sales to restaurants, grocery stores, wholesalers, brokers, or distributors, and no consignment. Farmers markets may still require vendors to hold a food license.",
    },
    source_url: MI_STATUTE,
    source_title: `${MI_STATUTE_TITLE}(4)`,
    last_verified: VERIFIED,
  },
  training_required: { value: false, source_url: MI_STATUTE, source_title: MI_STATUTE_TITLE, last_verified: VERIFIED, notes: "The cottage food statute contains no training requirement. MDARD points to an optional, MDARD-funded online training from MSU Extension." },
  inspection_required: { value: false, source_url: MI_FAQ, source_title: MI_FAQ_TITLE, last_verified: VERIFIED, notes: "Exempt from MDARD licensing and routine inspection. MDARD may inspect production and storage areas when investigating a complaint or foodborne illness." },
  caveats: [
    "Local zoning and ordinances still apply; check with your city, township, or county.",
    "The sales limits may be adjusted for inflation each October 1 starting in 2026; check MDARD for the current figure.",
    "Ingredients and finished products must be stored in the home, not in a garage, shed, or other outbuilding.",
    "Plain honey and maple syrup fall under separate MDARD licensing exemptions, not the cottage food exemption.",
  ],
  sources: [
    { title: MI_AGENCY_TITLE, url: MI_AGENCY, type: "agency_page" },
    { title: MI_FAQ_TITLE, url: MI_FAQ, type: "guidance" },
    { title: MI_FOODS_TITLE, url: MI_FOODS, type: "guidance" },
    { title: MI_LABELING_TITLE, url: MI_LABELING, type: "guidance" },
    { title: MI_SELLING_TITLE, url: MI_SELLING, type: "guidance" },
    { title: "MDARD — Michigan's Cottage Foods one-pager (03/2026)", url: MI_ONE_PAGER, type: "official_pdf" },
    { title: MI_STATUTE_TITLE, url: MI_STATUTE, type: "statute" },
    { title: MI_DEFS_TITLE, url: MI_DEFS, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
