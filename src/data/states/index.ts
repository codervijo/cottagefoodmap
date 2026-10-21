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
import { newJersey } from "./new-jersey";
import { virginia } from "./virginia";
import { washington } from "./washington";
import { arizona } from "./arizona";
import { tennessee } from "./tennessee";
import { massachusetts } from "./massachusetts";
import { indiana } from "./indiana";
import { maryland } from "./maryland";
import { missouri } from "./missouri";
import { wisconsin } from "./wisconsin";

export const STATES: StateLaw[] = [
  texas, california, florida, newYork, ohio,
  pennsylvania, illinois, georgia, northCarolina, michigan,
  newJersey, virginia, washington, arizona, tennessee,
  massachusetts, indiana, maryland, missouri, wisconsin,
].sort((a, b) => a.name.localeCompare(b.name));

export const STATES_BY_SLUG: Record<string, StateLaw> = Object.fromEntries(
  STATES.map((s) => [s.slug, s]),
);

export function getState(slug: string): StateLaw | undefined {
  return STATES_BY_SLUG[slug];
}
