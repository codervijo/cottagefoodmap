import type { StateLaw } from "../schema";
import { texas } from "./texas";
import { california } from "./california";
import { florida } from "./florida";
import { newYork } from "./new-york";
import { ohio } from "./ohio";

export const STATES: StateLaw[] = [texas, california, florida, newYork, ohio]
  .sort((a, b) => a.name.localeCompare(b.name));

export const STATES_BY_SLUG: Record<string, StateLaw> = Object.fromEntries(
  STATES.map((s) => [s.slug, s]),
);

export function getState(slug: string): StateLaw | undefined {
  return STATES_BY_SLUG[slug];
}
