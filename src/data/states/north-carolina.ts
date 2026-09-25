import type { StateLaw } from "../schema";

const NC_AGENCY = "https://www.ncagr.gov/divisions/food-drug-protection/food-program/food-drug-food-program-home-processor";
const NC_APP = "https://www.ncagr.gov/food-drug/fdpd-home-processing-app-pdf-0/download?attachment";
const NC_FDCA = "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_106/Article_12.html";
const NC_GMP = "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-B";
const NC_H833 = "https://www.ncleg.gov/BillLookUp/2025/H833";
const NC_AGENCY_TITLE = "NCDA&CS Food & Drug Protection — Home Processor";
const NC_APP_TITLE = "NCDA&CS — Application for Home Processor Inspection";
const VERIFIED = "2026-09-25";

export const northCarolina: StateLaw = {
  slug: "north-carolina",
  name: "North Carolina",
  abbreviation: "NC",
  program_name: { value: "Home Processor (home processing program)", source_url: NC_AGENCY, source_title: NC_AGENCY_TITLE, last_verified: VERIFIED },
  agency: { value: "North Carolina Department of Agriculture and Consumer Services (NCDA&CS), Food and Drug Protection Division", source_url: NC_AGENCY, source_title: NC_AGENCY_TITLE, last_verified: VERIFIED },
  permit_required: {
    value: false,
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "No permit is issued, but the home kitchen must pass an NCDA&CS inspection before any food is sold. Inspected home processors receive a \"Notice of Inspection.\"",
  },
  permit_details: {
    value: "Before selling, submit an Application for Home Processor Inspection with a business plan, a water bill or well-water test, and a sample label. NCDA&CS schedules an on-site kitchen inspection, typically 8 to 12 weeks after receiving the application. No permit is issued; after a compliant inspection you may produce and sell. Production must be in the home kitchen itself (not a garage, basement, or separate building), and no pets may enter the home. Check local zoning and any HOA or lease rules first.",
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  license_cost_usd: {
    value: "none",
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "NCDA&CS says a permit is not issued; neither its Home Processor page nor the application lists a fee. Product lab testing, well-water testing, and local permits may cost money.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "No sales limit appears in NCDA&CS home processor guidance or the application.",
  },
  food_status_overrides: {
    "baked-goods": {
      status: "restricted",
      reason: "NCDA&CS allows baked goods that do not require refrigeration, but bakery products with cream or cream cheese fillings and cheesecakes are high-risk and not permitted. \"Moist\" breads/cakes, some pies, and homemade cream cheese frostings may require pH or water-activity testing.",
    },
    honey: {
      status: "allowed",
      reason: "NCDA&CS's Application for Home Processor Inspection lists Honey among the production types an applicant can select. The Home Processor page's list of low-risk foods doesn't name honey.",
    },
    "pickles-and-fermented": {
      status: "restricted",
      reason: "NCDA&CS lists acid and acidified foods (e.g., pickles, BBQ sauce) as allowed, but asks producers to contact the office first. They must meet federal acidified-food rules (21 CFR 114 and 108), may need product testing with a Process Authority Letter, and may need to complete an Acidified Food Course.",
    },
    "coffee-and-tea": {
      status: "unclear",
      reason: "NCDA&CS lists \"some liquids (i.e. ice tea, coffee, lemonade, etc.)\" as possible low-risk foods, but doesn't name roasted coffee beans or dry tea blends. Bottled water and juice products are not permitted.",
    },
  },
  allowed_foods: {
    value: [
      "Baked goods that do not require refrigeration",
      "Jams, jellies, and preserves",
      "Candy",
      "Freeze-dried candy",
      "Dried mixes and spices",
      "Some liquids (e.g., iced tea, coffee, lemonade)",
      "Some sauces (e.g., balsamic dressing), after evaluation for shelf stability",
      "Acid and acidified foods (e.g., pickles, BBQ sauce), with extra requirements",
    ],
    source_url: NC_AGENCY,
    source_title: `${NC_AGENCY_TITLE} (Step 1)`,
    last_verified: VERIFIED,
    notes: "Only low-risk, shelf-stable foods that need no refrigeration or freezing. The list is examples (\"may include\"). Products without a standard of identity (e.g., apple butter) need extra evaluation. The application also lists honey and peanuts as production types.",
  },
  prohibited_foods: {
    value: [
      "Refrigerated or frozen products",
      "Low-acid canned foods (e.g., jarred fruits, vegetables)",
      "Dairy products",
      "Seafood products",
      "Bottled water and juice products",
      "Bakery products with cream or cream cheese fillings; cheesecakes",
    ],
    source_url: NC_AGENCY,
    source_title: `${NC_AGENCY_TITLE} (Step 1)`,
    last_verified: VERIFIED,
    notes: "High-risk foods \"include, but are not limited to\" these, and can only be produced commercially. Prepackaged products bought from a retailer or wholesaler that need refrigeration are also excluded.",
  },
  labeling_requirements: {
    value: [
      "Product name",
      "Manufacturer's name and physical address (a website address can't substitute)",
      "Net weight in ounces/pounds with the gram equivalent (or fluid ounces with the mL equivalent)",
      "Complete ingredient list in descending order of predominance by weight, with sub-ingredients in parentheses",
      "Major allergens (milk, egg, tree nuts, wheat, soy, peanuts, sesame, fish, shellfish) in the ingredient list or a \"Contains\" statement",
      "Nutrition label only if claims are made (e.g., low fat, sugar free)",
    ],
    source_url: NC_AGENCY,
    source_title: `${NC_AGENCY_TITLE} (Step 7)`,
    last_verified: VERIFIED,
    notes: "Labels are required for products packaged for self-service, sold wholesale to stores, distributors, or restaurants, or shipped (e.g., USPS, FedEx). Products sold on demand directly to consumers (home pickup, delivery, events, behind the counter at a market) can be unlabeled, but ingredient information must be available on request. A sample label is submitted with the application.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: null,
      online_out_of_state: null,
      delivery_in_state: true,
      retail_resale: true,
      notes: "NCDA&CS covers sales directly to consumers (including home pickup, delivery, and special events), at farmers' markets, and to retail stores, distributors, and restaurants. Shipped products (e.g., USPS, FedEx) must be labeled. The guidance doesn't address online sales or whether shipping may cross state lines.",
    },
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "NCDA&CS guidance lists no general training requirement. Producers of acidified foods may be required to take an Acidified Food Course and submit the certificate with the application.",
  },
  inspection_required: {
    value: true,
    source_url: NC_AGENCY,
    source_title: NC_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "The home kitchen must be inspected before selling. Home processors are treated as food manufacturing facilities and must meet federal Good Manufacturing Practices (21 CFR 117 Subpart B) and the N.C. Food, Drug and Cosmetic Act.",
  },
  caveats: [
    "North Carolina has no cottage food statute; the home processor program is run by NCDA&CS under the N.C. Food, Drug and Cosmetic Act.",
    "Any pet that comes into the home, even only at night, disqualifies the kitchen under Good Manufacturing Practices.",
    "A 2025 bill (H 833, the FRESH Act) would expand the program to some refrigerated and frozen foods; its last action was a committee referral on April 16, 2025, and it is not law.",
  ],
  sources: [
    { title: NC_AGENCY_TITLE, url: NC_AGENCY, type: "agency_page" },
    { title: NC_APP_TITLE, url: NC_APP, type: "official_pdf" },
    { title: "N.C. Gen. Stat. Chapter 106, Article 12 (Food, Drug and Cosmetic Act)", url: NC_FDCA, type: "statute" },
    { title: "21 CFR Part 117 Subpart B (Current Good Manufacturing Practice)", url: NC_GMP, type: "regulation" },
    { title: "N.C. House Bill 833 (2025), the FRESH Act — bill status", url: NC_H833, type: "statute" },
  ],
  last_reviewed: VERIFIED,
};
