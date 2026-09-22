import { useState, useMemo } from "react";
import type { StateLaw } from "../data/schema";
import { isUnverified } from "../data/schema";
import { capAmounts, capLabel } from "../data/format";

export function StatesList({ states }: { states: StateLaw[] }) {
  const [q, setQ] = useState("");
  const [permit, setPermit] = useState<"all" | "yes" | "no">("all");
  const [online, setOnline] = useState<"all" | "yes" | "no">("all");
  const [capBand, setCapBand] = useState<"all" | "lt50" | "50to150" | "gt150" | "none">("all");
  const [foodQ, setFoodQ] = useState("");

  const filtered = useMemo(() => {
    return states.filter((s) => {
      if (q && !s.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (permit !== "all") {
        if (isUnverified(s.permit_required)) return false;
        const v = s.permit_required.value;
        if (permit === "yes" && !v) return false;
        if (permit === "no" && v) return false;
      }
      if (online !== "all") {
        if (isUnverified(s.sales_channels)) return false;
        const v = s.sales_channels.value.online_in_state;
        if (v === null) return false;
        if (online === "yes" && v !== true) return false;
        if (online === "no" && v === true) return false;
      }
      if (capBand !== "all") {
        if (isUnverified(s.sales_cap_usd_annual)) return false;
        const cap = s.sales_cap_usd_annual.value;
        if (capBand === "none" && cap !== "none") return false;
        if (capBand !== "none") {
          if (cap === "none") return false;
          // A tiered cap matches a band if any tier falls in it.
          const inBand = (c: number) =>
            capBand === "lt50" ? c < 50000 : capBand === "50to150" ? c >= 50000 && c <= 150000 : c > 150000;
          if (!capAmounts(cap).some(inBand)) return false;
        }
      }
      if (foodQ) {
        if (isUnverified(s.allowed_foods)) return false;
        const hit = s.allowed_foods.value.some((f) =>
          f.toLowerCase().includes(foodQ.toLowerCase()),
        );
        if (!hit) return false;
      }
      return true;
    });
  }, [states, q, permit, online, capBand, foodQ]);

  return (
    <div className="container-prose py-10">
      <p className="citation">{states.length} states</p>
      <h1 className="font-serif text-3xl md:text-4xl">Cottage Food Laws by State</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Filter by permit requirements, online sales, sales cap, or by an allowed food.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 rounded border border-border bg-card p-4 md:grid-cols-5">
        <Field label="Search state">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Texas" className="input" />
        </Field>
        <Field label="Permit required">
          <select value={permit} onChange={(e) => setPermit(e.target.value as never)} className="input">
            <option value="all">Any</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Field>
        <Field label="Online sales (in-state)">
          <select value={online} onChange={(e) => setOnline(e.target.value as never)} className="input">
            <option value="all">Any</option>
            <option value="yes">Allowed</option>
            <option value="no">Not allowed</option>
          </select>
        </Field>
        <Field label="Sales cap">
          <select value={capBand} onChange={(e) => setCapBand(e.target.value as never)} className="input">
            <option value="all">Any</option>
            <option value="none">No cap</option>
            <option value="lt50">Under $50k</option>
            <option value="50to150">$50k–$150k</option>
            <option value="gt150">Over $150k</option>
          </select>
        </Field>
        <Field label="Allowed food">
          <input value={foodQ} onChange={(e) => setFoodQ(e.target.value)} placeholder="e.g. honey" className="input" />
        </Field>
      </div>

      <ul className="mt-8 divide-y divide-rule border-t border-rule">
        {filtered.map((s) => (
          <li key={s.slug} className="py-4">
            <a href={`/states/${s.slug}/`} className="no-underline">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-xl text-foreground">
                  {s.name} <span className="citation">/{s.abbreviation}</span>
                </h2>
                <span className="citation">
                  {isUnverified(s.program_name) ? "—" : s.program_name.value}
                </span>
              </div>
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              {isUnverified(s.permit_required)
                ? "Permit: unverified"
                : s.permit_required.value
                  ? "Permit required"
                  : "No state permit"}{" · "}
              {isUnverified(s.sales_cap_usd_annual)
                ? "Cap: unverified"
                : s.sales_cap_usd_annual.value === "none"
                  ? "No sales cap"
                  : `Cap ${capLabel(s.sales_cap_usd_annual.value)}`}
            </p>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="py-6 text-sm text-muted-foreground">No states match those filters.</li>
        )}
      </ul>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-xs">
      <span className="font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
