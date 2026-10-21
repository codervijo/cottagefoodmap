import type { StateLaw } from "../schema";

const MO_STATUTE = "https://revisor.mo.gov/main/OneSection.aspx?section=196.298";
const MO_GUIDANCE = "https://health.mo.gov/sites/health/files/media/pdf/2026/03/home-based-kitchen-food-prod-guidance.pdf";
const MO_FOOD_SAFETY = "https://health.mo.gov/business-professionals/food-safety";
const MO_FOOD_CODE = "https://health.mo.gov/sites/health/files/media/pdf/2025/11/missourifoodcode_0.pdf";
const MO_STATUTE_TITLE = "RSMo § 196.298 (Missouri Cottage Law), as amended by 2022 H.B. 1697";
const MO_GUIDANCE_TITLE = "Missouri DHSS — Missouri Home-Based Kitchen Food Production Guidance (Aug. 2023)";
const MO_FOOD_SAFETY_TITLE = "Missouri DHSS — Food Safety";
const MO_FOOD_CODE_TITLE = "Missouri Food Code (19 CSR 20-1.025), as published by DHSS";
const VERIFIED = "2026-10-21";

export const missouri: StateLaw = {
  slug: "missouri",
  name: "Missouri",
  abbreviation: "MO",
  program_name: {
    value: "Missouri Cottage Law (cottage food production operations)",
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "RSMo § 196.298 calls a qualifying home business a \"cottage food production operation\"; DHSS calls the statute the Missouri Cottage Law. DHSS describes it as an exemption that lets Missouri residents make specific non-potentially hazardous foods in their home kitchens for sale to the public without routine inspection.",
  },
  agency: {
    value: "Missouri Department of Health and Senior Services (DHSS), Bureau of Environmental Health Services",
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "RSMo § 196.298 names DHSS as \"the department\". Cottage food production operations are not subject to state or department health or food code laws other than § 196.298, and local health departments may not regulate their production. DHSS directs questions to local public health agencies.",
  },
  permit_required: {
    value: false,
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "DHSS: \"There is no food permit or license for cottage food production operations, but products must meet the labeling requirements listed by law.\" Foods outside the Cottage Law must meet local public health agency food safety rules and may need an approved commercial kitchen with routine inspection.",
  },
  permit_details: {
    value: "No permit, license, or registration. A cottage food production operation is an individual operating out of their home (a primary residence with a kitchen and appliances designed for common residential use) who makes baked goods, canned jams or jellies, or dried herbs or herb mixes and sells them only directly to consumers. Products must carry the required label. Only the person who prepared the food, or a household member with extensive knowledge of it, may sell it.",
    source_url: MO_STATUTE,
    source_title: `${MO_STATUTE_TITLE}, subsec. 1`,
    last_verified: VERIFIED,
    notes: "Who may sell: DHSS Home-Based Kitchen Food Production Guidance. Selling wholesale takes a product out of the Cottage Law; wholesalers must be inspected under the DHSS Manufactured Food program. Local public health agencies may adopt food ordinances equal to or more stringent than state regulations (DHSS guidance), but § 196.298(3)(1) says a local health department shall not regulate production at a cottage food production operation.",
  },
  license_cost_usd: {
    value: "none",
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "There is no permit or license, so there is no permit fee.",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "DHSS: \"There is no longer a limit to how much a cottage food producer can make annually.\" The $50,000 annual gross income cap was removed by 2022 H.B. 1697, effective Aug. 28, 2022; the current RSMo § 196.298 contains no sales limit.",
  },
  food_status_overrides: {
    candy: {
      status: "unclear",
      reason: "Candy is not one of the foods covered by Missouri's Cottage Law; DHSS says baked goods, canned jams or jellies, and dried herbs and herb mixes are the only items, and other foods cannot be sold under it. DHSS says freeze-dried, non-potentially hazardous foods (example: candy) may fall under the separate exemption in the Missouri Food Code, but only where local laws allow, as determined by the local public health agency.",
      sources: [
        { source_url: MO_GUIDANCE, source_title: MO_GUIDANCE_TITLE, last_verified: VERIFIED },
        { source_url: MO_FOOD_CODE, source_title: `${MO_FOOD_CODE_TITLE}, Ch. 1, "Food establishment" (3)(h)`, last_verified: VERIFIED },
      ],
    },
    honey: {
      status: "unclear",
      reason: "Honey is not one of the foods covered by Missouri's Cottage Law. DHSS treats pure honey as a raw agricultural commodity that may be sold directly to the end consumer; apiaries that harvest, filter, and package their own pure honey on-farm are not routinely inspected, but off-farm or added processing makes an operation subject to inspection. The Missouri Food Code's separate individual-stand exemption, where local codes allow, also lists honey.",
      sources: [
        { source_url: MO_GUIDANCE, source_title: MO_GUIDANCE_TITLE, last_verified: VERIFIED },
        { source_url: MO_FOOD_CODE, source_title: `${MO_FOOD_CODE_TITLE}, Ch. 1, "Food establishment" (3)(h)`, last_verified: VERIFIED },
      ],
    },
    "coffee-and-tea": {
      status: "prohibited",
      reason: "DHSS says baked goods, canned jams or jellies, and dried herbs and herb mixes are \"the only items that can be prepared out of the individuals' home,\" and a food not on that list \"cannot be sold or claimed under the Missouri Cottage Law exemption.\" Coffee and tea are not on the list, and the Missouri Food Code's separate individual-stand exemption doesn't name them either.",
      sources: [
        { source_url: MO_GUIDANCE, source_title: MO_GUIDANCE_TITLE, last_verified: VERIFIED },
        { source_url: MO_FOOD_CODE, source_title: `${MO_FOOD_CODE_TITLE}, Ch. 1, "Food establishment" (3)(h)`, last_verified: VERIFIED },
      ],
    },
  },
  allowed_foods: {
    value: [
      "Baked goods that are not potentially hazardous (cookies, cakes, breads, danish, donuts, pastries, pies, and other items prepared by baking the item in an oven)",
      "Canned jams or jellies",
      "Dried herbs and dried herb mixes",
    ],
    source_url: MO_STATUTE,
    source_title: `${MO_STATUTE_TITLE}, subsec. 1`,
    last_verified: VERIFIED,
    notes: "DHSS: the Cottage Law \"is very specific that baked goods, canned jams or jellies, and dried herb and dried herb mixes are the only items that can be prepared out of the individuals' home.\" A food that is potentially hazardous is no longer a cottage food product. A separate Missouri Food Code exemption, only where local codes allow, covers individual stands selling other non-potentially hazardous foods (see caveats).",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous foods (foods that require temperature control for safety)",
      "Baked goods garnished with fresh fruit; meringue and cream pies",
      "\"No Sugar Added,\" \"Sugar Free,\" and hot pepper jams and jellies",
      "Cut produce",
      "Freeze dried foods",
      "Salsa, pickles, and sauces (BBQ sauce, hot sauce, etc.)",
      "Sprouts and wild mushrooms",
      "Meats, dairy, and eggs",
      "Pet foods and pet treats",
      "Marijuana-infused products",
    ],
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "DHSS's list of foods that cannot be sold under the Missouri Cottage Law ends \"And more….\" Meringue and cream pies, pet foods, marijuana-infused products, and artificially sweetened jams come from DHSS's Q&A: jams and jellies made with artificial sweeteners must be tested for pH and water activity, and the producer must contact their local public health agency.",
  },
  labeling_requirements: {
    value: [
      "Name and address of the cottage food production operation",
      "A statement that the food is not inspected by the department or local health department",
      "Common name of the food",
      "Names of all ingredients in descending order by weight",
      "Net weight of the food",
      "Any allergens in the food",
    ],
    source_url: MO_STATUTE,
    source_title: `${MO_STATUTE_TITLE}, subsec. 4`,
    last_verified: VERIFIED,
    notes: "The statute requires the name, address, and not-inspected statement. Common name, ingredients, net weight, and allergens come from DHSS's guidance, which says the label must be legible and include \"A statement that the product is prepared in a kitchen that is not subject to inspection by the Missouri Department of Health and Senior Services.\" Neither source prescribes exact wording.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: null,
      online_in_state: true,
      online_out_of_state: false,
      delivery_in_state: null,
      retail_resale: false,
      notes: "Sales must be made only directly to consumers. Internet sales are allowed only when both the operation and the purchaser are in Missouri (§ 196.298(5)); DHSS: \"A cottage food producer may not sell their products across state lines.\" Wholesale takes a product out of the Cottage Law. The statute defines the operation as producing food \"for sale at the individual's home\"; neither source addresses farmers markets or delivery. Asked about selling cottage foods from a mobile establishment, DHSS points to the Food Code individual-stand exemption, available only if local laws allow.",
    },
    source_url: MO_STATUTE,
    source_title: `${MO_STATUTE_TITLE}, subsecs. 1 and 5`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: false,
    source_url: MO_STATUTE,
    source_title: `${MO_STATUTE_TITLE}, subsec. 2`,
    last_verified: VERIFIED,
    notes: "RSMo § 196.298 contains no training requirement and says a cottage food production operation is not subject to any state health or food code laws or regulations other than that section and its rules. DHSS's guidance names no training requirement.",
  },
  inspection_required: {
    value: false,
    source_url: MO_GUIDANCE,
    source_title: MO_GUIDANCE_TITLE,
    last_verified: VERIFIED,
    notes: "DHSS: cottage foods are made \"for sale to the public without being subject to routine inspection.\" Local health departments may not regulate production at a cottage food production operation; they and DHSS must keep a record of complaints, and state and local health departments keep their authority to investigate food-borne disease or outbreaks (§ 196.298(3), (6)).",
  },
  caveats: [
    "Missouri's Cottage Law covers only baked goods, canned jams or jellies, and dried herbs and herb mixes. Other home-made foods must meet local public health agency rules and may need an approved, inspected commercial kitchen.",
    "Separately, the Missouri Food Code exempts individual stands, where local codes allow, that sell non-potentially hazardous processed foods (e.g., breads, cookies, fruit pies, jams, jellies, preserves, fruit butters, honey, sorghum, cracked nuts, packaged spices and spice mixes, dry cookie, cake, bread, and soup mixes), excluding low-acid canned and acidified foods. The seller must be the producer or an immediate family member in the household, must sell directly to the end consumer, must label the food, and must post a placard for unpackaged portions. Check with your local public health agency.",
    "2022 H.B. 1697, effective Aug. 28, 2022, allowed in-state online sales and removed the $50,000 annual gross income cap.",
    "§ 196.298(4) directs DHSS to promulgate labeling rules for cottage food production operations. No such rule was found in 19 CSR 20-1 as published by the Missouri Secretary of State (checked 2026-10-21).",
    "Selling across state lines may be subject to inspection by the FDA or other authorities (DHSS).",
    "DHSS's guidance says it reflects the department's current interpretation and does not bind federal, state, or local food safety regulators.",
  ],
  sources: [
    { title: MO_STATUTE_TITLE, url: MO_STATUTE, type: "statute" },
    { title: MO_GUIDANCE_TITLE, url: MO_GUIDANCE, type: "official_pdf" },
    { title: MO_FOOD_SAFETY_TITLE, url: MO_FOOD_SAFETY, type: "agency_page" },
    { title: MO_FOOD_CODE_TITLE, url: MO_FOOD_CODE, type: "regulation" },
  ],
  last_reviewed: VERIFIED,
};
