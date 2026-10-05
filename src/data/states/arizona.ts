import type { StateLaw } from "../schema";

const AZ_DEFS = "https://www.azleg.gov/ars/36/00931.htm";
const AZ_STATUTE = "https://www.azleg.gov/ars/36/00932.htm";
const AZ_APPLICABILITY = "https://www.azleg.gov/ars/36/00933.htm";
const AZ_DHS_STATUTE = "https://www.azleg.gov/ars/36/00136.htm";
const AZ_RULE = "https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/food-safety-environmental-services/cottage-food-program/r9-8-101-02-cottage-food.pdf";
const AZ_AGENCY = "https://www.azdhs.gov/preparedness/epidemiology-disease-control/food-safety-environmental-services/cottage-food-program/index.php";
const AZ_REGISTRATION = `${AZ_AGENCY}#registration`;
const AZ_TRAINING = `${AZ_AGENCY}#food-handler-training`;
const AZ_FOODS = `${AZ_AGENCY}#approved-foods`;
const AZ_LABELING = `${AZ_AGENCY}#labeling-requirements`;
const AZ_SPECIAL = `${AZ_AGENCY}#special-processes`;
const AZ_FAQ = `${AZ_AGENCY}#faqs`;
const AZ_PRESENTATION = "https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/food-safety-environmental-services/cottage-food-program/program-presentation.pdf";
const AZ_HB2042 = "https://www.azleg.gov/legtext/56leg/2R/summary/H.HB2042_040224_TRANSMITTED.pdf";
const AZ_DEFS_TITLE = "A.R.S. § 36-931 (Cottage food products — definitions)";
const AZ_STATUTE_TITLE = "A.R.S. § 36-932 (Labeling; food handler certification; sale and delivery requirements)";
const AZ_APPLICABILITY_TITLE = "A.R.S. § 36-933 (Applicability of article; rules; enforcement)";
const AZ_DHS_STATUTE_TITLE = "A.R.S. § 36-136 (Powers and duties of director)";
const AZ_RULE_TITLE = "A.A.C. R9-8-101.02 (Cottage Food), effective Feb. 4, 2025 — ADHS copy of the final rule";
const AZ_AGENCY_TITLE = "Arizona Dept. of Health Services — Cottage Food Program";
const AZ_REGISTRATION_TITLE = "ADHS Cottage Food Program — Program Registration";
const AZ_TRAINING_TITLE = "ADHS Cottage Food Program — Food Handler Training";
const AZ_FOODS_TITLE = "ADHS Cottage Food Program — Approved Foods";
const AZ_LABELING_TITLE = "ADHS Cottage Food Program — Labeling Requirements";
const AZ_SPECIAL_TITLE = "ADHS Cottage Food Program — Special Processes";
const AZ_FAQ_TITLE = "ADHS Cottage Food Program — Frequently Asked Questions";
const AZ_PRESENTATION_TITLE = "ADHS Cottage Food Program — Program Overview Presentation";
const VERIFIED = "2026-10-05";

export const arizona: StateLaw = {
  slug: "arizona",
  name: "Arizona",
  abbreviation: "AZ",
  program_name: {
    value: "Cottage Food Program",
    source_url: AZ_REGISTRATION,
    source_title: AZ_REGISTRATION_TITLE,
    last_verified: VERIFIED,
    notes: "Formerly called the Home Baked and Confectionery Goods program. HB 2042 (2024) moved the cottage food rules into A.R.S. §§ 36-931 to 36-933 and expanded them to perishable (TCS) foods; ADHS's new rules took effect February 4, 2025.",
  },
  agency: {
    value: "Arizona Department of Health Services (ADHS), Food Safety and Environmental Services",
    source_url: AZ_AGENCY,
    source_title: AZ_AGENCY_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: true,
    source_url: AZ_DHS_STATUTE,
    source_title: `${AZ_DHS_STATUTE_TITLE}, subsec. (I)(4)(g), (I)(13)`,
    last_verified: VERIFIED,
    notes: "No license or permit, but registration with ADHS is required: the cottage food exemption covers only food prepared by or under the direct supervision of an individual registered with the department (A.R.S. § 36-931(1)).",
  },
  permit_details: {
    value: "Register online with ADHS (through MyHealthDepartment) before preparing any cottage food. The application includes the preparer's contact information, the home kitchen's street address, whether it is a facility for individuals with developmental disabilities, a menu of the foods to be made, a copy of an active accredited food handler training certificate, and a signed attestation to follow the cottage food law. ADHS emails a certificate of registration; processing can take 4–6 weeks. Registration must be renewed every three years by submitting a new application, and changes must be reported within 30 days. The certificate must be displayed when selling away from the home kitchen. Food must be made in the registrant's home kitchen (a residential kitchen of no more than 1,000 square feet, or a kitchen in a facility for individuals with developmental disabilities).",
    source_url: AZ_RULE,
    source_title: `${AZ_RULE_TITLE}, subsec. (A)`,
    last_verified: VERIFIED,
    notes: "Home kitchen definition: A.R.S. § 36-931(3). Processing time and online registration: ADHS FAQ and Program Registration page. Adding new products to an approved menu needs prior approval by email to ADHS.",
  },
  license_cost_usd: {
    value: "none",
    source_url: AZ_FAQ,
    source_title: AZ_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "ADHS says registrants can \"grow your small business without inspections or fees\"; its program presentation calls the program \"complimentary\" with no annual program fees. The food handler training course is a separate cost set by the course provider (amount not published by ADHS).",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: AZ_STATUTE,
    source_title: `${AZ_STATUTE_TITLE}, subsec. (D)(1)`,
    last_verified: VERIFIED,
    notes: "No sales limit appears in A.R.S. §§ 36-931 to 36-933, A.A.C. R9-8-101.02, or ADHS's Cottage Food Program pages. The statute says a food preparer may sell cottage food products \"to the maximum extent allowed by federal law.\"",
  },
  allows_all_except_prohibited: true,
  allowed_foods: {
    value: [
      "Most foods, both shelf-stable and perishable (TCS), except fish, shellfish, raw milk, alcoholic beverages, and marijuana-infused products",
      "Baked goods, e.g., cookies, cakes and cupcakes, brownies, cheesecakes, pies and cobblers (including pumpkin), pastries, tarts, donuts, breads, rolls, bagels, muffins, scones, and biscuits",
      "Frostings and icings, including buttercream, ganache, and cream cheese frosting",
      "Candy and confections, e.g., freeze-dried candy, fudge, toffee and brittles, caramel apples, marshmallows, cotton candy, truffles, and chocolate-dipped treats",
      "Jams, jellies, pepper jellies, marmalades, fruit butters, fruit curds, and nut butters",
      "Savory prepared foods, e.g., tamales, burritos, empanadas, meals and entrees, soups and stews",
      "Salsas and hot sauces, pickles and pickled vegetables, and fermented foods (e.g., kimchi, sauerkraut, miso)",
      "Meat and poultry products (e.g., jerky) only from a USDA-inspected source, or poultry raised under the federal 1,000-bird exemption; must be sold directly from the registrant to the consumer",
      "Honey (raw, infused, or creamed)",
      "Dry goods: dry spice blends and rubs, dry baking mixes, dry dip mixes, granola, dried pasta, extracts, and dehydrated or freeze-dried fruits and vegetables",
      "Roasted coffee beans (whole or ground) and cold brew; loose-leaf tea blends and brewed tea",
      "Snack foods, e.g., popcorn, roasted and candied nuts, trail and snack mixes, pretzels, crackers, and chips",
      "Beverages and drink mixes, e.g., lemonades and agua frescas, fresh juices, syrups, sodas, kombucha, hot cocoa mixes, and dry drink mixes",
    ],
    source_url: AZ_FOODS,
    source_title: AZ_FOODS_TITLE,
    last_verified: VERIFIED,
    notes: "ADHS: \"Most foods are allowed!\" The statute defines a cottage food product as a food made in a registered home kitchen that either is or is not potentially hazardous / TCS (A.R.S. § 36-931(1)). Freeze-drying, smoking, dehydrating, canning, pickling, and fermenting are approved processes. Ingredients must come from approved sources and be FDA GRAS. Foods must be packaged and labeled in the home kitchen and sold in that unaltered packaging; open sampling, assembling food, and pouring drinks are not covered. Ask ADHS before making anything you're unsure about.",
  },
  prohibited_foods: {
    value: [
      "Fish and shellfish (fresh, frozen, or canned)",
      "Raw (unpasteurized) milk, as an ingredient or for sale",
      "Alcoholic beverages and foods meant to intoxicate (alcohol may be used as an ingredient if the end product isn't intended to intoxicate)",
      "Marijuana, marijuana by-products, and CBD",
      "Meat and poultry not from a USDA-inspected source (e.g., hunted game, home-slaughtered quail) unless federal law allows the sale",
      "Ingredients not recognized as safe (GRAS) by the FDA, e.g., kava; dietary supplements such as capsules",
      "Wild-foraged produce",
      "Pet treats and animal feed (regulated by the Arizona Department of Agriculture)",
      "Home-raised raw shell eggs (regulated by the Arizona Department of Agriculture's Egg Inspections program)",
    ],
    source_url: AZ_FOODS,
    source_title: AZ_FOODS_TITLE,
    last_verified: VERIFIED,
    notes: "Statutory exclusions: alcoholic beverages, unpasteurized milk, foods that are or contain alcoholic beverages, fish and shellfish, and meat and poultry unless their sale is allowed by federal law (A.R.S. § 36-931(1)(b)); marijuana (A.R.S. § 36-932(F)(2)). A cottage food may not be used as an ingredient in food sold at a permitted retail food establishment (A.R.S. § 36-932(F)(1)).",
  },
  labeling_requirements: {
    value: [
      "Name and registration number of the food preparer",
      "List of all ingredients, including those in components",
      "Production date",
      "\"This product was produced in a home kitchen that may come in contact with common food allergens and pet allergens and is not subject to public health inspection.\"",
      "The ADHS website address for reporting foodborne illness and checking registration status (www.azdhs.gov/CottageFood)",
      "If made in a facility for individuals with developmental disabilities, a statement saying so",
      "Label must be clear and legible (printed or handwritten) and attached to the package; packaging must be clean, fully enclose the food, and have a tamper-evident seal (the label may serve as the seal)",
    ],
    source_url: AZ_STATUTE,
    source_title: `${AZ_STATUTE_TITLE}, subsec. (A)`,
    last_verified: VERIFIED,
    notes: "Packaging and tamper-evident seal: A.A.C. R9-8-101.02(C)(4). Online listings must show the same label information prominently (A.R.S. § 36-932(B)); samples must also be packaged and labeled. Products sold through a retail establishment may also need a declaration of responsibility and declaration of quantity under Arizona Department of Agriculture weights-and-measures rules (ADHS Labeling Requirements page).",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: true,
      online_out_of_state: "not_authorized",
      delivery_in_state: true,
      retail_resale: true,
      notes: "Arizona only: cottage foods may be offered for sale and delivery only in Arizona, including online sales. Shelf-stable (non-TCS) foods without dairy, meat, or poultry may be sold through agents and third-party vendors such as stores or kiosks (in a separate section with a sign saying they're homemade and exempt from state licensing and inspection), shipped within Arizona, and delivered by third-party carriers or delivery platforms. Perishable (TCS) foods and foods with meat or poultry must be sold directly by the registrant and delivered in person, never through third-party delivery platforms or vendors; TCS foods must be kept at a safe temperature, go to only one destination, and spend no more than two hours in transit. Sales away from home (e.g., as a temporary food establishment) require displaying the certificate of registration. Cottage foods may not be used as ingredients in food sold at a permitted retail food establishment.",
    },
    source_url: AZ_RULE,
    source_title: `${AZ_RULE_TITLE}, subsec. (A)(7), (D)`,
    last_verified: VERIFIED,
  },
  training_required: {
    value: true,
    source_url: AZ_STATUTE,
    source_title: `${AZ_STATUTE_TITLE}, subsec. (C)`,
    last_verified: VERIFIED,
    notes: "The person preparing or directly supervising preparation must complete a food handler training course from an accredited program and keep the certification active. ADHS points to ANSI-accredited online courses; an active Food Manager Certification also suffices. Proof is required with each registration and renewal.",
  },
  inspection_required: {
    value: false,
    source_url: AZ_FAQ,
    source_title: AZ_FAQ_TITLE,
    last_verified: VERIFIED,
    notes: "ADHS: \"No, an inspection is not required.\" The department may still investigate reported foodborne illness (A.R.S. § 36-933(A)(2)) and may suspend or revoke a registration after a verified food safety complaint (A.A.C. R9-8-101.02(G)).",
  },
  caveats: [
    "County and city zoning, building codes, business licenses, and HOA rules still apply (A.R.S. § 36-933(A)(4)).",
    "Cottage food registration doesn't exempt products from brand, animal health, or other state or federal food inspections, or from Arizona's milk and raw milk rules.",
    "Home-raised eggs, pet treats, and animal feed are regulated by the Arizona Department of Agriculture, not the Cottage Food Program.",
    "New products must be approved by ADHS before you make them; email the program with your updated menu.",
  ],
  sources: [
    { title: AZ_AGENCY_TITLE, url: AZ_AGENCY, type: "agency_page" },
    { title: AZ_REGISTRATION_TITLE, url: AZ_REGISTRATION, type: "agency_page" },
    { title: AZ_TRAINING_TITLE, url: AZ_TRAINING, type: "guidance" },
    { title: AZ_FOODS_TITLE, url: AZ_FOODS, type: "guidance" },
    { title: AZ_LABELING_TITLE, url: AZ_LABELING, type: "guidance" },
    { title: AZ_SPECIAL_TITLE, url: AZ_SPECIAL, type: "guidance" },
    { title: AZ_FAQ_TITLE, url: AZ_FAQ, type: "guidance" },
    { title: AZ_PRESENTATION_TITLE, url: AZ_PRESENTATION, type: "official_pdf" },
    { title: AZ_RULE_TITLE, url: AZ_RULE, type: "regulation" },
    { title: AZ_DEFS_TITLE, url: AZ_DEFS, type: "statute" },
    { title: AZ_STATUTE_TITLE, url: AZ_STATUTE, type: "statute" },
    { title: AZ_APPLICABILITY_TITLE, url: AZ_APPLICABILITY, type: "statute" },
    { title: AZ_DHS_STATUTE_TITLE, url: AZ_DHS_STATUTE, type: "statute" },
    { title: "Arizona House summary — HB 2042 (2024), food preparation; sale; cottage food", url: AZ_HB2042, type: "official_pdf" },
  ],
  last_reviewed: VERIFIED,
};
