import type { StateLaw } from "../schema";

const TN_AGENCY = "https://www.tn.gov/agriculture/consumers/food-safety/tennessee-food-freedom-act.html";
const TN_PC_2022 = "https://publications.tnsosfiles.com/acts/112/pub/pc0862.pdf";
const TN_PC_2025 = "https://publications.tnsosfiles.com/acts/114/pub/pc0431.pdf";
const TN_BILL_2025 = "https://wapp.capitol.tn.gov/apps/BillInfo/Default.aspx?BillNumber=HB0130&GA=114";
const TN_AGENCY_TITLE = "Tennessee Dept. of Agriculture — Tennessee Food Freedom Act";
const TN_PC_2022_TITLE = "2022 Tenn. Pub. Acts ch. 862 (SB 693, Tennessee Food Freedom Act), codified at T.C.A. § 53-1-118";
const TN_PC_2025_TITLE = "2025 Tenn. Pub. Acts ch. 431 (SB 484 / HB 130), amending T.C.A. § 53-1-118";
const VERIFIED = "2026-10-05";

export const tennessee: StateLaw = {
  slug: "tennessee",
  name: "Tennessee",
  abbreviation: "TN",
  program_name: {
    value: "Tennessee Food Freedom Act (homemade food items)",
    source_url: TN_AGENCY,
    source_title: TN_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "TDA says the Tennessee Food Freedom Act (T.C.A. § 53-1-118) \"is also commonly referred to as the Tennessee Cottage Food Law or the Cottage Food Industry Act.\" Enacted by 2022 Pub. Ch. 862, effective July 1, 2022; amended by 2025 Pub. Ch. 431, effective July 1, 2025.",
  },
  agency: {
    value: "Tennessee Department of Agriculture (TDA)",
    source_url: TN_AGENCY,
    source_title: TN_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "TDA administers the law only to the extent it carves out an exception to the Food, Drug, and Cosmetic Act, and issues no permits or licenses for it. The Department of Health investigates reported foodborne illness.",
  },
  permit_required: {
    value: false,
    source_url: TN_PC_2022,
    source_title: `${TN_PC_2022_TITLE}, § 3(a)`,
    last_verified: VERIFIED,
    notes: "Production and sale of homemade food items are exempt from all state licensing, permitting, inspecting, packaging, and labeling laws, except when the Department of Health is investigating a reported foodborne illness. TDA: \"We therefore do not issue permits, licenses, or conduct inspections for products made under this law.\"",
  },
  permit_details: {
    value: "No license, permit, registration, or inspection. Food must be produced (and, if packaged, packaged) at the producer's private residence, sold within Tennessee, and carry the required consumer information and disclaimer. The law preempts counties, cities, and other local jurisdictions from prohibiting or regulating the production and sale of homemade food items.",
    source_url: TN_PC_2022,
    source_title: `${TN_PC_2022_TITLE}, §§ 2–3`,
    last_verified: VERIFIED,
    notes: "\"Homemade food item\" means a food item, including a non-alcoholic beverage, produced and, if packaged, packaged at the producer's private residence. The exemption doesn't apply to sales other than intrastate sales and doesn't exempt producers or sellers from tax law.",
  },
  license_cost_usd: {
    value: "none",
    source_url: TN_AGENCY,
    source_title: TN_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "TDA does not issue permits or licenses for products made under the Food Freedom Act, so there is no state fee.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: TN_PC_2022,
    source_title: TN_PC_2022_TITLE,
    last_verified: VERIFIED,
    notes: "No sales limit appears in the Food Freedom Act (2022 Pub. Ch. 862), its 2025 amendment (Pub. Ch. 431), or TDA's Food Freedom Act page.",
  },
  allows_all_except_prohibited: true,
  allowed_foods: {
    value: [
      "Any homemade food item that does not require time/temperature control for safety (non-TCS), including non-alcoholic beverages, produced at the producer's private residence",
      "Since July 1, 2025: time/temperature control for safety (TCS) homemade food items, sold only in person, unless they are or contain an item on the prohibited list",
    ],
    source_url: TN_PC_2025,
    source_title: `${TN_PC_2025_TITLE}, § 4 (T.C.A. § 53-1-118(b)(3))`,
    last_verified: VERIFIED,
    notes: "The law has no list of allowed foods: it covers any \"homemade food item\" (2022 Pub. Ch. 862, § 2), and \"produce\" includes cooking, baking, drying, mixing, cutting, fermenting, preserving, dehydrating, growing, and raising. TDA: the 2025 amendment allows \"the production and sale of certain time/temperature controlled food items.\" TDA cannot advise on whether a specific product qualifies.",
  },
  prohibited_foods: {
    value: [
      "TCS homemade food items that include unpasteurized milk, or that are or contain alcoholic beverages, fish, shellfish products, meat, meat byproducts, or meat food products",
      "TCS homemade food items with poultry, unless the producer qualifies for the federal 1,000-poultry exemption (9 CFR 381.10(c)) or uses only inspected and passed poultry under 9 CFR 381.10(d)",
      "TCS homemade food items beyond what federal law permits",
    ],
    source_url: TN_PC_2025,
    source_title: `${TN_PC_2025_TITLE}, § 4 (T.C.A. § 53-1-118(b)(3)(A)–(B))`,
    last_verified: VERIFIED,
    notes: "These limits apply to TCS foods. The statute lists no prohibited non-TCS foods.",
  },
  labeling_requirements: {
    value: [
      "Name, home address, and telephone number of the producer",
      "Common or usual name of the homemade food item",
      "Ingredients in descending order of predominance",
      "\"This product was produced at a private residence that is exempt from state licensing and inspection. This product may contain allergens.\"",
    ],
    source_url: TN_PC_2022,
    source_title: `${TN_PC_2022_TITLE}, § 3(b)(3)–(4) (now T.C.A. § 53-1-118(b)(4)–(5))`,
    last_verified: VERIFIED,
    notes: "The information goes on a label on the package, on a label on the bulk container, on a placard at the point of sale if the item is neither packaged nor sold from a bulk container, or on the webpage if sold only online. For telephone or custom orders, the seller need not display it but must tell the consumer the item was produced at a private residence exempt from state licensing and inspection and may contain allergens, and must provide the name/address/phone, product name, and ingredients on request. 2025 Pub. Ch. 431 renumbered these subdivisions without changing them.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: null,
      online_in_state: true,
      online_out_of_state: "not_authorized",
      delivery_in_state: true,
      retail_resale: true,
      notes: "Non-TCS foods may be sold by the producer to the consumer in person or remotely (e.g., by telephone or internet), or by an agent of the producer or a third-party vendor such as a retail shop or grocery store; they may be delivered by the producer, an agent, a third-party vendor, or a third-party carrier. TCS foods may be sold only in person, by the producer or by an agent of the producer (e.g., a farm stand on the property where the food was prepared) — no online, remote, or retail-store sales. The law doesn't name farmers markets; it sets no location limit on in-person sales. The exemption applies only to intrastate sales within Tennessee.",
    },
    source_url: TN_PC_2022,
    source_title: `${TN_PC_2022_TITLE}, § 3(b)(1)–(2), (c)(5); TCS rules: 2025 Pub. Ch. 431, § 4`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: TN_PC_2022,
    source_title: TN_PC_2022_TITLE,
    last_verified: VERIFIED,
    notes: "Neither the Food Freedom Act nor its 2025 amendment contains a training requirement, and the exemption covers all state licensing and permitting laws.",
  },
  inspection_required: {
    value: false,
    source_url: TN_AGENCY,
    source_title: TN_AGENCY_TITLE,
    last_verified: VERIFIED,
    notes: "Exempt from all state inspecting laws, except when the Department of Health is investigating a reported foodborne illness. TDA may take enforcement action against homemade food products in the marketplace that fall outside the law's exemptions.",
  },
  caveats: [
    "TDA does not advise on whether a specific product qualifies; it refers questions to private legal counsel.",
    "Perishable (TCS) foods have been allowed only since July 1, 2025, and only for in-person sales.",
    "Producers and sellers are not exempt from tax law.",
    "TCS foods may be sold only to the extent federal law permits (e.g., federal poultry exemptions).",
  ],
  sources: [
    { title: TN_AGENCY_TITLE, url: TN_AGENCY, type: "agency_page" },
    { title: TN_PC_2022_TITLE, url: TN_PC_2022, type: "statute" },
    { title: TN_PC_2025_TITLE, url: TN_PC_2025, type: "statute" },
    { title: "Tennessee General Assembly — HB 130 / SB 484 (114th GA) bill history", url: TN_BILL_2025, type: "guidance" },
  ],
  last_reviewed: VERIFIED,
};
