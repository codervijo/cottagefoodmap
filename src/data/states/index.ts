import type { StateLaw } from "../schema";
import { texas } from "./texas";
import { california } from "./california";
import { florida } from "./florida";
import { newYork } from "./new-york";
import { ohio } from "./ohio";
import { pennsylvania } from "./pennsylvania";
import { illinois } from "./illinois";
import { georgia } from "./georgia";
import { northCarolina } from "./north-carolina";
import { michigan } from "./michigan";

export const STATES: StateLaw[] = [
  texas, california, florida, newYork, ohio,
  pennsylvania, illinois, georgia, northCarolina, michigan,
].sort((a, b) => a.name.localeCompare(b.name));

export const STATES_BY_SLUG: Record<string, StateLaw> = Object.fromEntries(
  STATES.map((s) => [s.slug, s]),
);

export function getState(slug: string): StateLaw | undefined {
  return STATES_BY_SLUG[slug];
}
