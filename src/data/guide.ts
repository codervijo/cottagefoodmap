// Cited statements for the guide pages. Every statement is a restatement of one verified
// Fact and carries that Fact's source, so a guide never shows a claim without its citation.
// Unverified facts produce no statement; callers drop the gap instead of filling it.

import type { Fact, SalesCapTier, StateLaw } from "./schema";
import { isUnverified } from "./schema";
import type { FoodCategory } from "./foods";
import { channelLabel, formatDate, isTiered, usd } from "./format";

export type Citation = { source_url: string; source_title?: string; last_verified: string };
// `more` holds extra sources when one statement rests on several (e.g. a list page and a FAQ).
export type Cited = { text: string; cite: Citation; more?: Citation[] };
export type QA = { q: string; a: Cited[] };

const citeOf = (f: Citation): Citation => ({
  source_url: f.source_url,
  source_title: f.source_title,
  last_verified: f.last_verified,
});

function stated<T>(f: Fact<T>, text: (v: T) => string): Cited | null {
  return isUnverified(f) ? null : { text: text(f.value), cite: citeOf(f) };
}

function notesOf(f: Fact<unknown>): Cited | null {
  return isUnverified(f) || !f.notes ? null : { text: f.notes, cite: citeOf(f) };
}

export const compact = (xs: (Cited | null | undefined)[]): Cited[] => xs.filter((x): x is Cited => !!x);

export function permitStatement(state: StateLaw): Cited | null {
  return stated(state.permit_required, (v) =>
    v
      ? `${state.name} requires a permit or registration to sell cottage food.`
      : `${state.name} does not require a state-issued permit for cottage food.`,
  );
}

export function agencyStatement(state: StateLaw): Cited | null {
  return stated(state.agency, (v) => `The program is run by the ${v}.`);
}

export function costStatement(state: StateLaw): Cited | null {
  return stated(state.license_cost_usd, (v) => {
    if (v === "none") return `${state.name} does not charge a state cottage food license fee.`;
    if (v === "varies") return `${state.name} sets cottage food fees at the local level, so they vary by jurisdiction.`;
    if (v === 0) return `${state.name}'s cottage food permit or exemption is free.`;
    return `${state.name} charges ${usd(v)} for a cottage food license.`;
  });
}

function tierStatement(state: StateLaw, t: SalesCapTier): Cited {
  return {
    text: `${state.name} ${t.class}: ${usd(t.adjusted_usd)} a year in gross sales (statutory base ${usd(t.base_usd)}; in effect from ${formatDate(t.effective)}).`,
    cite: citeOf(t),
  };
}

export function capStatements(state: StateLaw): Cited[] {
  const f = state.sales_cap_usd_annual;
  if (isUnverified(f)) return [];
  const v = f.value;
  if (isTiered(v)) return v.map((t) => tierStatement(state, t));
  return [
    {
      text:
        v === "none"
          ? `${state.name} sets no overall annual sales cap for cottage food.`
          : `${state.name} caps cottage food sales at ${usd(v)} a year.`,
      cite: citeOf(f),
    },
  ];
}

export function capDetail(state: StateLaw): Cited[] {
  return compact([
    notesOf(state.sales_cap_usd_annual),
    state.sales_cap_notes ? stated(state.sales_cap_notes, (v) => v) : null,
  ]);
}

export function trainingStatement(state: StateLaw): Cited | null {
  return stated(state.training_required, (v) =>
    v ? `${state.name} requires food safety training.` : `${state.name} does not require food safety training.`,
  );
}

export function inspectionStatement(state: StateLaw): Cited | null {
  return stated(state.inspection_required, (v) =>
    v ? `${state.name} requires a home kitchen inspection.` : `${state.name} does not require a home kitchen inspection.`,
  );
}

export function channelStatement(state: StateLaw): Cited | null {
  return stated(state.sales_channels, (c) =>
    [
      `In person: ${channelLabel(c.in_person)}`,
      `farmers markets: ${channelLabel(c.farmers_market)}`,
      `online orders within ${state.name}: ${channelLabel(c.online_in_state)}`,
      `shipping to other states: ${channelLabel(c.online_out_of_state)}`,
      `delivery within ${state.name}: ${channelLabel(c.delivery_in_state)}`,
      `sales to stores or for resale: ${channelLabel(c.retail_resale)}`,
    ].join("; ") + ".",
  );
}

export function channelNotes(state: StateLaw): Cited | null {
  const f = state.sales_channels;
  return isUnverified(f) || !f.value.notes ? null : { text: f.value.notes, cite: citeOf(f) };
}

export const factNotes = notesOf;

export function overrideStatement(state: StateLaw, food: FoodCategory): Cited | null {
  const o = state.food_status_overrides?.[food.slug];
  if (!o || !o.sources?.length) return null;
  const [first, ...rest] = o.sources.map(citeOf);
  return { text: o.reason, cite: first, more: rest.length ? rest : undefined };
}

// Whole-word match for a food's terms in free text (plural and -ed forms allowed), stricter
// than the list matcher so "tea" doesn't hit "teaspoon".
export function mentionsFood(text: string, food: FoodCategory): boolean {
  return food.match.some((m) =>
    new RegExp(`\\b${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(s|es|d|ed)?\\b`, "i").test(text),
  );
}

// Notes elsewhere in the state's record that name this food: caps, labeling notes, permit,
// training, and inspection. The guide shows the allowed/prohibited lists, label lines, and
// sales-channel notes in their own sections.
export function foodNotes(state: StateLaw, food: FoodCategory): Cited[] {
  const candidates = compact([
    ...capDetail(state),
    notesOf(state.labeling_requirements),
    stated(state.permit_details, (v) => v),
    notesOf(state.permit_details),
    notesOf(state.license_cost_usd),
    notesOf(state.training_required),
    notesOf(state.inspection_required),
  ]);
  const seen = new Set<string>();
  return candidates.filter((c) => {
    if (seen.has(c.text) || !mentionsFood(c.text, food)) return false;
    seen.add(c.text);
    return true;
  });
}

// Label requirement lines that name this food (e.g. a honey warning statement).
export function foodLabelLines(state: StateLaw, food: FoodCategory): string[] {
  const lab = state.labeling_requirements;
  return isUnverified(lab) ? [] : lab.value.filter((l) => mentionsFood(l, food));
}

export function citationLabel(c: Citation): string {
  return `${c.source_title ?? c.source_url}, verified ${formatDate(c.last_verified)}`;
}

// FAQPage JSON-LD built from the same Q&A objects the page renders, so the markup always
// matches the visible text.
export function faqJsonLd(qas: QA[]): object | null {
  const items = qas.filter((x) => x.a.length > 0);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a.map((c) => c.text).join(" ") },
    })),
  };
}
