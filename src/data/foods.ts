// Food categories that map across state allowed/prohibited lists.
// `match` is a list of case-insensitive terms matched at word starts against state data.

export interface FoodCategory {
  slug: string;
  name: string;
  description: string;
  match: string[]; // substrings to look up in allowed_foods/prohibited_foods values
}

export const FOODS: FoodCategory[] = [
  {
    slug: "jams-and-jellies",
    name: "Jams & Jellies",
    description: "Fruit preserves, jams, jellies, marmalades, and fruit butters.",
    match: ["jam", "jelly", "jellies", "preserve", "marmalade", "fruit butter"],
  },
  {
    slug: "baked-goods",
    name: "Baked Goods",
    description: "Breads, cookies, cakes, brownies, and similar shelf-stable baked items.",
    match: ["baked good", "bread", "cookie", "cake", "pastry", "brownie", "biscuit", "roll", "pie"],
  },
  {
    slug: "candy",
    name: "Candy & Confections",
    description: "Hard candies, toffees, brittles, and confections.",
    match: ["candy", "confection", "toffee", "brittle"],
  },
  {
    slug: "honey",
    name: "Honey",
    description: "Raw or bottled honey from the operator.",
    match: ["honey"],
  },
  {
    slug: "pickles-and-fermented",
    name: "Pickles & Fermented Foods",
    description: "Acidified or fermented vegetables, pickles, salsa, and sauces.",
    match: ["pickle", "ferment", "salsa", "acidified"],
  },
  {
    slug: "dried-goods",
    name: "Dried Goods & Mixes",
    description: "Dried fruit, dried herbs, dry baking mixes, granola, and cereals.",
    match: ["dried", "dry baking", "granola", "cereal", "trail mix", "dry pasta", "spice", "herb blend"],
  },
  {
    slug: "coffee-and-tea",
    name: "Coffee & Tea",
    description: "Roasted coffee beans and dry tea blends.",
    match: ["coffee", "tea"],
  },
];

export const FOODS_BY_SLUG: Record<string, FoodCategory> = Object.fromEntries(
  FOODS.map((f) => [f.slug, f]),
);

export type FoodStatus = "allowed" | "restricted" | "prohibited" | "unclear";

import type { StateLaw } from "./schema";
import { isUnverified } from "./schema";

// The state's own allowed/prohibited list items that name this category.
export function foodMatches(
  state: StateLaw,
  food: FoodCategory,
): { allowed: string[]; prohibited: string[] } {
  const allowed = isUnverified(state.allowed_foods) ? [] : state.allowed_foods.value;
  const prohibited = isUnverified(state.prohibited_foods) ? [] : state.prohibited_foods.value;
  // Match terms at the start of a word: "pie" matches "pies" but not "Krispies".
  const patterns = food.match.map(
    (m) => new RegExp(`\\b${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"),
  );
  const hits = (list: string[]) =>
    list.filter((item) => patterns.some((re) => re.test(item)));
  return { allowed: hits(allowed), prohibited: hits(prohibited) };
}

export function statusForFood(state: StateLaw, food: FoodCategory): FoodStatus {
  const override = state.food_status_overrides?.[food.slug];
  if (override) return override.status;
  const { allowed, prohibited } = foodMatches(state, food);
  // Both lists name the category (e.g., CA allows baked goods but prohibits
  // cream-filled ones) — allowed only within the listed limits.
  if (allowed.length && prohibited.length) return "restricted";
  if (prohibited.length) return "prohibited";
  if (allowed.length || state.allows_all_except_prohibited) return "allowed";
  return "unclear";
}

export const STATUS_ANSWER: Record<FoodStatus, string> = {
  allowed: "Yes",
  restricted: "Yes, with limits",
  prohibited: "No",
  unclear: "Unclear",
};
