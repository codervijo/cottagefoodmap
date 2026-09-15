import type { StateLaw } from "../data/schema";
import { isUnverified } from "../data/schema";
import { STATES } from "../data/states";
import { FactRow, YesNo, MoneyOrNone, BulletList } from "./Fact";
import { Disclaimer } from "./Disclaimer";

export function StateDetail({ state }: { state: StateLaw }) {
  const otherStates = STATES.filter((s) => s.slug !== state.slug).slice(0, 4);

  return (
    <article className="container-prose py-10">
      <p className="citation">United States · {state.abbreviation}</p>
      <h1 className="font-serif text-4xl">{state.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        {isUnverified(state.program_name) ? "Cottage food program" : state.program_name.value}
      </p>
      <div className="mt-4"><Disclaimer /></div>

      <div className="double-rule mt-8 pt-6" />

      <h2 className="font-serif text-xl">At a glance</h2>
      <dl className="mt-2 divide-y divide-rule border-y border-rule">
        <FactRow label="Administering agency" fact={state.agency} />
        <FactRow label="Permit required" fact={state.permit_required} render={(v) => <YesNo value={v} />} />
        <FactRow label="License cost" fact={state.license_cost_usd} render={(v) => <MoneyOrNone value={v} />} />
        <FactRow
          label="Annual sales cap"
          fact={state.sales_cap_usd_annual}
          render={(v) => <MoneyOrNone value={v} />}
        />
        <FactRow label="Training required" fact={state.training_required} render={(v) => <YesNo value={v} />} />
        <FactRow label="Home inspection" fact={state.inspection_required} render={(v) => <YesNo value={v} />} />
      </dl>

      <h2 className="mt-10 font-serif text-xl">Permit details</h2>
      <dl className="mt-2 divide-y divide-rule border-y border-rule">
        <FactRow label="How it works" fact={state.permit_details} />
      </dl>

      <h2 className="mt-10 font-serif text-xl">Allowed foods</h2>
      <dl className="mt-2 divide-y divide-rule border-y border-rule">
        <FactRow label="Allowed" fact={state.allowed_foods} render={(items) => <BulletList items={items} />} />
        <FactRow label="Prohibited" fact={state.prohibited_foods} render={(items) => <BulletList items={items} />} />
      </dl>

      <h2 className="mt-10 font-serif text-xl">Labeling requirements</h2>
      <dl className="mt-2 divide-y divide-rule border-y border-rule">
        <FactRow label="On every package" fact={state.labeling_requirements} render={(items) => <BulletList items={items} />} />
      </dl>

      <h2 className="mt-10 font-serif text-xl">Sales channels</h2>
      <dl className="mt-2 divide-y divide-rule border-y border-rule">
        <FactRow
          label="Where you can sell"
          fact={state.sales_channels}
          render={(ch) => (
            <ul className="space-y-1">
              <li>In person: <YesNo value={ch.in_person} /></li>
              <li>Farmers market: <YesNo value={ch.farmers_market} /></li>
              <li>Online (in-state): <YesNo value={ch.online_in_state} /></li>
              <li>Online (out-of-state shipping): <YesNo value={ch.online_out_of_state} /></li>
              <li>Delivery (in-state): <YesNo value={ch.delivery_in_state} /></li>
              <li>Retail / wholesale resale: <YesNo value={ch.retail_resale} /></li>
              {ch.notes && <li className="text-muted-foreground">{ch.notes}</li>}
            </ul>
          )}
        />
      </dl>

      {state.caveats.length > 0 && (
        <>
          <h2 className="mt-10 font-serif text-xl">Caveats</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {state.caveats.map((c: string) => <li key={c}>{c}</li>)}
          </ul>
        </>
      )}

      <h2 className="mt-10 font-serif text-xl">Official sources</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {state.sources.map((s: any) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>{" "}
            <span className="citation">· {s.type.replace("_", " ")}</span>
          </li>
        ))}
      </ul>
      <p className="citation mt-6">Page last reviewed: {state.last_reviewed}</p>

      <div className="double-rule mt-10 pt-6">
        <h2 className="font-serif text-xl">Related</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          <li>
            <a href={`/guides/license-cost/${state.slug}/`}>
              Cottage food license cost in {state.name}
            </a>
          </li>
          <li>
            <a href={`/guides/labeling/${state.slug}/`}>
              Cottage food labeling requirements in {state.name}
            </a>
          </li>
          {otherStates.map((s) => (
            <li key={s.slug}>
              <a href={`/states/${s.slug}/`}>Compare with {s.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
