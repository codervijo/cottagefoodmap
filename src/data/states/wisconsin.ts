import type { StateLaw } from "../schema";

const WI_BAKED = "https://datcp.wi.gov/Pages/Licenses_Permits/HomeBakers.aspx";
const WI_BAKED_FLYER = "https://datcp.wi.gov/Documents2/HomemadeBakedGoods.pdf";
const WI_CANNED = "https://datcp.wi.gov/pages/programs_services/fshomecannedfoods.aspx";
const WI_CANNED_PUB = "https://datcp.wi.gov/Documents/SellingHomeCannedFoods.pdf";
const WI_HONEY = "https://datcp.wi.gov/Pages/Programs_Services/FSHoney.aspx";
const WI_STATUTE = "https://docs.legis.wisconsin.gov/document/statutes/97.29";
const WI_RETAIL_STATUTE = "https://docs.legis.wisconsin.gov/document/statutes/97.30";
const WI_COA = "https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=878326";
const WI_LC_BRIEF = "https://docs.legis.wisconsin.gov/misc/lc/issue_briefs/2025/consumer_protection/ib_wis_cottage_food_law_ag_2025_06_18";
const WI_AB748 = "https://docs.legis.wisconsin.gov/2025/proposals/ab748";
const WI_SB739 = "https://docs.legis.wisconsin.gov/2025/proposals/sb739";
const WI_RFSAC = "https://datcp.wi.gov/Documents2/20250425RetailFoodSafetyAdvisoryCouncilMinutes.pdf";
const WI_BAKED_TITLE ="DATCP — Licenses and Homemade Baked Goods";
const WI_BAKED_FLYER_TITLE = "DATCP — Licenses and Homemade Baked Goods flyer (P-DFRS0222, 05/2025)";
const WI_CANNED_TITLE = "DATCP — Home-Canned Foods";
const WI_CANNED_PUB_TITLE = "DATCP — Selling Home-Canned Foods: Do It Safely and Legally (FD-PUB-61, 12/2022)";
const WI_HONEY_TITLE = "DATCP — Honey and Honey Products";
const WI_STATUTE_TITLE = "Wis. Stat. § 97.29 (Food processing plants)";
const WI_RETAIL_STATUTE_TITLE = "Wis. Stat. § 97.30 (Retail food establishments)";
const WI_COA_TITLE = "Wisconsin Cottage Food Ass'n v. DATCP, 2024 WI App 69 (Wis. Ct. App. Nov. 19, 2024)";
const WI_LC_BRIEF_TITLE = "Wisconsin Legislative Council — Issue Brief: Wisconsin Cottage Food Law (June 2025)";
const WI_AB748_TITLE = "2025 Wis. Assembly Bill 748 (failed to pass, Mar. 23, 2026)";
const WI_SB739_TITLE = "2025 Wis. Senate Bill 739 (failed to pass, Mar. 23, 2026)";
const WI_RFSAC_TITLE = "DATCP — Retail Food Safety Advisory Council draft minutes (Apr. 25, 2025)";
const VERIFIED = "2026-10-21";

export const wisconsin: StateLaw = {
  slug: "wisconsin",
  name: "Wisconsin",
  abbreviation: "WI",
  program_name: {
    value: "Homemade Baked Goods (court orders) and Home-Canned Foods (\"Pickle Bill\") exemption",
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "Wisconsin has no cottage food statute. Home bakers can sell because of Lafayette County Circuit Court orders (Kivirist v. DATCP, Case No. 2016CV06) that bar DATCP from enforcing licensing requirements against home bakers who make baked goods that are not potentially hazardous and sell them directly to consumers. Separately, Wis. Stat. § 97.29(2)(b)2., which DATCP calls the \"Pickle Bill\", lets people sell certain home-canned acidic or acidified fruits and vegetables without a license.",
  },
  agency: {
    value: "Wisconsin Department of Agriculture, Trade and Consumer Protection (DATCP), Division of Food and Recreational Safety",
    source_url: WI_BAKED_FLYER,
    source_title: WI_BAKED_FLYER_TITLE,
    last_verified: VERIFIED,
  },
  permit_required: {
    value: false,
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "Home bakers: court orders prohibit DATCP from enforcing licensing requirements for home bakers who make baked goods that are not potentially hazardous and sell them directly to consumers. Home-canned foods: no license is needed to sell qualifying home-canned products at retail under § 97.29(2)(b)2. Potentially hazardous baked goods, wholesale baked goods, unbaked foods, and canned foods outside the exemption need a DATCP license.",
  },
  permit_details: {
    value: "No license, registration, or application for either route. Home bakers may sell baked goods that are not potentially hazardous, made in their own homes, directly to consumers; DATCP says businesses producing potentially hazardous baked goods or wholesaling baked goods must be licensed, and commercial-kitchen bakeries must follow ATCP 70 or ATCP 75. Home canners may sell home-canned fruits and vegetables with a pH of 4.6 or lower, under $5,000 a year, directly to consumers at community or social events, flea markets, or farmers markets in Wisconsin, with the required sign and labels. Other homemade foods sold to the public need a DATCP food license.",
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "Home-canned rules from DATCP's Home-Canned Foods page and Wis. Stat. § 97.29(2)(b)2. DATCP's disclaimer: \"Business operators are advised to practice due diligence in determining whether their practices require them to hold a food business license.\" DATCP licensing contact: (608) 224-4923, datcpdfslicensing@wisconsin.gov. DATCP's honey page tells producers to check local town, village, city, and county ordinances.",
  },
  license_cost_usd: {
    value: "none",
    source_url: WI_CANNED,
    source_title: WI_CANNED_TITLE,
    last_verified: VERIFIED,
    notes: "Neither route has a license, so there is no license fee: the home-canned exemption allows sales \"without a license\", and DATCP does not enforce licensing for qualifying home bakers. Licensed food businesses pay the fees set in Wis. Stat. §§ 97.29(3) and 97.30(3).",
  },
  sales_cap_usd_annual: {
    value: "none",
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "DATCP's homemade baked goods page and flyer set no dollar limit for home bakers. Home-canned foods are capped: the seller must receive less than $5,000 per year from their sale (Wis. Stat. § 97.29(2)(b)2.c.; DATCP: \"No more than $5,000 per year per person\").",
  },
  sales_cap_notes: {
    value: "Home-canned (\"Pickle Bill\") sales are limited to less than $5,000 per year per person. DATCP suggests keeping records of every batch made for sale, including amount canned and sold, sale dates and locations, and gross sales receipts. For home bakers, the Wisconsin Legislative Council describes the Kivirist exception as covering baked goods sold \"direct to consumer, and at a low volume\"; neither the court orders as described by DATCP nor DATCP's guidance sets a dollar figure.",
    source_url: WI_STATUTE,
    source_title: `${WI_STATUTE_TITLE}(2)(b)2.c.`,
    last_verified: VERIFIED,
  },
  food_status_overrides: {
    candy: {
      status: "prohibited",
      reason: "Homemade candy is not a baked good, so it needs a DATCP license. The Court of Appeals reversed the 2022 order that had covered unbaked homemade foods such as fudges and candies (2024 WI App 69), and DATCP says the court orders \"apply only to 'baked goods.'\"",
      sources: [
        { source_url: WI_BAKED, source_title: WI_BAKED_TITLE, last_verified: VERIFIED },
        { source_url: WI_COA, source_title: `${WI_COA_TITLE}, ¶¶6, 39`, last_verified: VERIFIED },
      ],
    },
    honey: {
      status: "unclear",
      reason: "Honey is outside both home-food routes. DATCP says no DATCP license is needed to extract, package, and sell only your own honey or bee products, processed only by straining, heating, or crystallizing, under a separate licensing exemption (Wis. Stat. § 97.29(1)(h)8.). Honey bought from other beekeepers, flavored, whipped, or made into other products such as candy needs a DATCP license.",
      sources: [
        { source_url: WI_HONEY, source_title: WI_HONEY_TITLE, last_verified: VERIFIED },
        { source_url: WI_STATUTE, source_title: `${WI_STATUTE_TITLE}(1)(h)8.`, last_verified: VERIFIED },
      ],
    },
  },
  allowed_foods: {
    value: [
      "Baked goods that are not potentially hazardous, made in the baker's home (generally baked by dry heat above 140°F in a closed chamber such as an oven; some items made in a waffle maker or Dutch oven count), such as cookies, cakes, and muffins",
      "Home-canned fruits and vegetables that are naturally acidic or acidified by pickling or fermenting, with a pH of 4.6 or lower: pickled fruits and vegetables (not refrigerator pickles), salsas and chutneys, sauerkraut and kimchi",
      "Home-canned fruit based jams and jellies",
      "Home-canned cherries, peaches, applesauce, and other fruits",
      "Honey and bee products from the producer's own bees and apiaries, processed only by straining or heating for packaging, or crystallized into spun or creamed honey",
    ],
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "Baked goods: DATCP's homemade baked goods page; the cookies, cakes, and muffins examples are from the Court of Appeals' description of Kivirist (2024 WI App 69, ¶5). The finished, ready-for-sale product must not be potentially hazardous. Home-canned foods: DATCP's Home-Canned Foods page; the statute says \"pickles or other processed vegetables or fruits with an equilibrium pH value of 4.6 or lower\" (§ 97.29(2)(b)2.a.), and DATCP recommends testing the pH of acidified products. Honey: DATCP's Honey and Honey Products page (no DATCP license needed) and § 97.29(1)(h)8.; this is a separate licensing exemption, not part of either route above.",
  },
  prohibited_foods: {
    value: [
      "Potentially hazardous baked goods (any business producing them must be licensed)",
      "Items dried in a dehydrator (not considered baked goods)",
      "Unbaked, not potentially hazardous homemade foods such as fudges, candies, energy bars, roasted coffee beans, and dried soup mixes (DATCP may enforce licensing)",
      "Processed fruits or vegetables with a pH higher than 4.6",
      "Fish, meat, pickled eggs, lemon curd, pesto, or dressings, regardless of pH",
      "Honey or bee products gathered or purchased from other beekeepers, or further processed by adding color, flavors, or other ingredients (including whipping with air) or made into other products such as candy",
    ],
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "These need a DATCP license; they are not banned outright. Baked goods and dehydrated items: DATCP's homemade baked goods page. Unbaked foods: the Court of Appeals reversed the 2022 order that had extended the court protection to them (2024 WI App 69, ¶¶6, 39); DATCP says the court orders \"apply only to 'baked goods.'\" Canned foods: DATCP's Home-Canned Foods page. Honey: DATCP's Honey and Honey Products page.",
  },
  labeling_requirements: {
    value: [
      "Home-canned foods: sign at the point of sale stating \"These canned goods are homemade and not subject to state inspection.\"",
      "Home-canned foods, on each container: name and address of the person who did the canning",
      "Home-canned foods, on each container: date of canning",
      "Home-canned foods, on each container: \"This product was made in a private home not subject to state licensing or inspection.\"",
      "Home-canned foods, on each container: all ingredients in descending order of prominence, including the common name of any ingredient from milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, or sesame",
      "Honey: general food label requirements, plus \"Ungraded\" if not graded (or the grade, and color for Wisconsin No. 1)",
    ],
    source_url: WI_CANNED,
    source_title: WI_CANNED_TITLE,
    last_verified: VERIFIED,
    notes: "DATCP's homemade baked goods page and flyer state no labeling requirements for home bakers. The canned-food sign and label wording is in Wis. Stat. § 97.29(2)(b)2.d.–e.; the statute's allergen list (milk, eggs, fish, crustacean shellfish, tree nuts, wheat, peanuts, soybeans) does not include sesame, which DATCP's page adds. Honey labeling from DATCP's Honey and Honey Products page.",
  },
  sales_channels: {
    value: {
      in_person: true,
      farmers_market: true,
      online_in_state: null,
      online_out_of_state: "not_authorized",
      delivery_in_state: null,
      retail_resale: false,
      notes: "Home bakers: the court orders apply only when the home baker sells directly to consumers; DATCP says a business wholesaling baked goods must be licensed. DATCP's baked-goods guidance does not address internet sales, delivery, or shipping. Home-canned foods: only retail sales direct from producer to consumer, only at community or social events, flea markets, or farmers markets in Wisconsin; DATCP says sales out of your home, wholesale, on consignment, via the internet, or out of state are not permitted, nor are pickle bill products sold along with licensed foods.",
    },
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "Home-canned channel rules from DATCP's Home-Canned Foods page and Wis. Stat. § 97.29(2)(b)2.b.",
  },
  training_required: {
    value: false,
    source_url: WI_BAKED,
    source_title: WI_BAKED_TITLE,
    last_verified: VERIFIED,
    notes: "DATCP's homemade baked goods page and flyer, its Home-Canned Foods page, and Wis. Stat. § 97.29(2)(b)2. name no training requirement. DATCP strongly encourages using standardized, tested canning recipes.",
  },
  inspection_required: {
    value: false,
    source_url: WI_CANNED_PUB,
    source_title: WI_CANNED_PUB_TITLE,
    last_verified: VERIFIED,
    notes: "DATCP's home-canned brochure says \"inspection is not required\", and the required sign and label say the products are \"not subject to state inspection.\" Home bakers covered by the court orders are not licensed by DATCP; DATCP's baked-goods guidance names no inspection.",
  },
  caveats: [
    "Wisconsin's home-baker rules come from court orders, not a statute. A 2017 Lafayette County Circuit Court decision in Kivirist v. DATCP (Case No. 2016CV06), and later clarifications, bar DATCP from enforcing licensing against home bakers of baked goods that are not potentially hazardous sold directly to consumers. DATCP did not appeal.",
    "On Dec. 28, 2022, the same court extended the protection to any homemade food that is not potentially hazardous. The Wisconsin Court of Appeals reversed that order on Nov. 19, 2024 (2024 WI App 69), and the Wisconsin Supreme Court denied review. Candy, fudge, roasted coffee, dried mixes, and other unbaked homemade foods again need a DATCP license. (DATCP's page gives the Supreme Court denial date as April 10, 2024, which is before the appeals decision it reviewed; DATCP's April 25, 2025 advisory council minutes report the denial as recent.)",
    "DATCP warns that ongoing litigation may change the applicability or accuracy of its guidance.",
    "The home-canned (\"Pickle Bill\") exemption is in Wis. Stat. § 97.29(2)(b)2. and is separate from the home-baker court orders: different foods, a $5,000 annual cap, and sales only at community or social events, flea markets, or farmers markets in Wisconsin.",
    "2025 Assembly Bill 748 and Senate Bill 739 would have created a statutory exemption for home-made baked goods and other shelf-stable foods; both failed to pass on March 23, 2026.",
    "DATCP's guidance applies only to food made in the producer's home; commercial kitchens must follow ATCP 70 or ATCP 75 and make sure every business using them is licensed.",
    "Check local town, village, city, and county ordinances; farmers markets may have their own rules.",
  ],
  sources: [
    { title: WI_BAKED_TITLE, url: WI_BAKED, type: "agency_page" },
    { title: WI_BAKED_FLYER_TITLE, url: WI_BAKED_FLYER, type: "official_pdf" },
    { title: WI_CANNED_TITLE, url: WI_CANNED, type: "agency_page" },
    { title: WI_CANNED_PUB_TITLE, url: WI_CANNED_PUB, type: "official_pdf" },
    { title: WI_HONEY_TITLE, url: WI_HONEY, type: "agency_page" },
    { title: WI_STATUTE_TITLE, url: WI_STATUTE, type: "statute" },
    { title: WI_RETAIL_STATUTE_TITLE, url: WI_RETAIL_STATUTE, type: "statute" },
    { title: WI_COA_TITLE, url: WI_COA, type: "official_pdf" },
    { title: WI_LC_BRIEF_TITLE, url: WI_LC_BRIEF, type: "guidance" },
    { title: WI_AB748_TITLE, url: WI_AB748, type: "statute" },
    { title: WI_SB739_TITLE, url: WI_SB739, type: "statute" },
    { title: WI_RFSAC_TITLE, url: WI_RFSAC, type: "guidance" },
  ],
  last_reviewed: VERIFIED,
};
