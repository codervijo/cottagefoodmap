import type { StateLaw } from "../schema";

const FL_AGENCY = "https://www.fdacs.gov/Business-Services/Food-Establishments/Cottage-Foods";
const FL_STATUTE = "https://www.flsenate.gov/Laws/Statutes/2026/500.80";
const FL_DEFINITIONS = "https://www.flsenate.gov/Laws/Statutes/2026/500.03";
const FL_HB663_ANALYSIS = "https://www.flsenate.gov/Session/Bill/2021/663/Analyses/h0663c.COM.PDF";
const FL_AGENCY_TITLE = "FDACS — Cottage Foods";
const FL_STATUTE_TITLE = "Fla. Stat. § 500.80 (2026)";
const VERIFIED = "2026-09-15";

export const florida: StateLaw = {
  slug: "florida",
  name: "Florida",
  abbreviation: "FL",
  program_name: { value: "Cottage Food Operation", source_url: FL_DEFINITIONS, source_title: "Fla. Stat. § 500.03 (2026)", last_verified: VERIFIED },
  agency: { value: "Florida Department of Agriculture and Consumer Services (FDACS)", source_url: FL_AGENCY, source_title: FL_AGENCY_TITLE, last_verified: VERIFIED },
  permit_required: {
    value: false,
    source_url: FL_STATUTE,
    source_title: FL_STATUTE_TITLE,
    last_verified: VERIFIED,
    notes: "Exempt from FDACS food permitting while annual gross sales of cottage food products stay at or under $250,000.",
  },
  permit_details: {
    value: "No FDACS food permit is required if the operation follows s. 500.80 and its annual gross sales of cottage food products do not exceed $250,000. FDACS may investigate complaints and inspect the premises only after a complaint. State and federal tax laws and certificates still apply.",
    source_url: FL_STATUTE,
    source_title: FL_STATUTE_TITLE,
    last_verified: VERIFIED,
  },
  license_cost_usd: { value: "none", source_url: FL_AGENCY, source_title: FL_AGENCY_TITLE, last_verified: VERIFIED, notes: "No food permit is required, so there is no permit fee." },
  sales_cap_usd_annual: {
    value: 250000,
    source_url: FL_STATUTE,
    source_title: FL_STATUTE_TITLE,
    last_verified: VERIFIED,
    notes: "Raised from $50,000 to $250,000 by CS/HB 663 (ch. 2021-211), effective July 1, 2021. Sales at all locations count toward the limit.",
  },
  allowed_foods: {
    value: [
      "Loaf breads, rolls, biscuits",
      "Cakes, pastries and cookies",
      "Candies and confections",
      "Honey",
      "Jams, jellies and preserves",
      "Fruit pies and dried fruits",
      "Dry herbs, seasonings and mixtures",
      "Homemade pasta",
      "Cereals, trail mixes and granola",
      "Coated or uncoated nuts",
      "Vinegar and flavored vinegars",
      "Popcorn and popcorn balls",
    ],
    source_url: FL_AGENCY,
    source_title: `${FL_AGENCY_TITLE} (Approved Cottage Food Products)`,
    last_verified: VERIFIED,
  },
  prohibited_foods: {
    value: [
      "Any food that requires time or temperature control for safety (TCS)",
      "Fresh or dried meat or meat products, including jerky",
      "Fish or shellfish products",
      "Canned fruits and vegetables, chutneys, vegetable butters and jellies, flavored oils, hummus, garlic dip, salsas",
      "Canned pickled products such as corn relish, pickles, and sauerkraut",
      "Raw seed sprouts",
      "Bakery goods that require refrigeration, such as cream, custard, or meringue pies and cakes or pastries with cream cheese icings or fillings",
      "Milk and dairy products, including cheeses and yogurt",
      "Cut fresh fruits or vegetables; juices made from fresh fruits or vegetables",
      "Ice or ice products",
      "Barbecue sauces, ketchups, mustards",
      "Focaccia-style breads with vegetables or cheeses",
    ],
    source_url: FL_HB663_ANALYSIS,
    source_title: "Florida House staff analysis of CS/HB 663 (2021), listing FDACS prohibited cottage foods",
    last_verified: VERIFIED,
    notes: "The current FDACS page lists approved foods only. TCS foods are excluded by definition (Fla. Stat. § 500.03); the named examples come from FDACS guidance as quoted in the 2021 House analysis.",
  },
  labeling_requirements: {
    value: [
      "Name and address of the cottage food operation",
      "Name of the cottage food product",
      "Ingredients in descending order of predominance by weight",
      "Net weight or net volume",
      "Allergen information as specified by federal labeling requirements",
      "Nutrition information, if any nutritional claim is made",
      "Statement in at least 10-point type, in a contrasting color: \"Made in a cottage food operation that is not subject to Florida's food safety regulations.\"",
    ],
    source_url: FL_STATUTE,
    source_title: FL_STATUTE_TITLE,
    last_verified: VERIFIED,
    notes: "Products must be prepackaged with the label affixed.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: true,
      delivery_in_state: true,
      retail_resale: false,
      notes: "May sell and accept payment online or by mail order, and deliver in person, to an event venue, or by USPS or commercial mail carrier. Wholesale is not allowed. Free samples must be prepackaged. Products sold must be stored on the premises.",
    },
    source_url: FL_STATUTE,
    source_title: FL_STATUTE_TITLE,
    last_verified: VERIFIED,
  },
  training_required: { value: false, source_url: FL_STATUTE, source_title: FL_STATUTE_TITLE, last_verified: VERIFIED, notes: "Neither s. 500.80 nor the FDACS page lists a training requirement." },
  inspection_required: { value: false, source_url: FL_STATUTE, source_title: FL_STATUTE_TITLE, last_verified: VERIFIED, notes: "FDACS may inspect the premises only after receiving a complaint." },
  caveats: [
    "Regulation of cottage food operations is preempted to the state: local laws may not prohibit them or regulate their preparation, storage, or sale.",
    "Florida law allows mail delivery but doesn't address other states' rules; check the destination state's requirements before shipping out of state.",
  ],
  sources: [
    { title: FL_AGENCY_TITLE, url: FL_AGENCY, type: "agency_page" },
    { title: FL_STATUTE_TITLE, url: FL_STATUTE, type: "statute" },
    { title: "Fla. Stat. § 500.03 (definitions)", url: FL_DEFINITIONS, type: "statute" },
    { title: "Florida House staff analysis, CS/HB 663 (2021)", url: FL_HB663_ANALYSIS, type: "guidance" },
  ],
  last_reviewed: VERIFIED,
};
