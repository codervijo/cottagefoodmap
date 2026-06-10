import { createFileRoute, Link } from "@tanstack/react-router";
import { STATES } from "@/data/states";
import { isUnverified } from "@/data/schema";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Cottage Food Laws Across U.S. States" },
      { name: "description", content: "Side-by-side comparison of cottage food laws: permits, sales caps, online sales, training, and inspections." },
      { property: "og:title", content: "Compare Cottage Food Laws" },
      { property: "og:description", content: "Side-by-side cottage food law comparison." },
      { property: "og:url", content: "/compare" },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
  component: Compare,
});

function cell<T>(f: { unverified?: true } | { value: T }, render?: (v: T) => string): string {
  if ("unverified" in f) return "—";
  const v = (f as { value: T }).value;
  return render ? render(v) : String(v);
}

function Compare() {
  return (
    <div className="container-prose py-10">
      <h1 className="font-serif text-3xl md:text-4xl">Compare U.S. Cottage Food Laws</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A side-by-side comparison of the cottage food rules in covered states. Click a state name
        for the full sourced page.
      </p>
      <div className="mt-6 overflow-x-auto rounded border border-border">
        <table className="w-full min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="bg-muted text-left">
              <Th>State</Th>
              <Th>Permit</Th>
              <Th>License cost</Th>
              <Th>Annual sales cap</Th>
              <Th>Online (in-state)</Th>
              <Th>Out-of-state shipping</Th>
              <Th>Training</Th>
              <Th>Inspection</Th>
            </tr>
          </thead>
          <tbody>
            {STATES.map((s) => {
              const ch = isUnverified(s.sales_channels) ? null : s.sales_channels.value;
              return (
                <tr key={s.slug} className="border-t border-rule align-top">
                  <Td>
                    <Link to="/states/$slug" params={{ slug: s.slug }} className="font-medium no-underline">
                      {s.name}
                    </Link>
                    <div className="citation">/{s.abbreviation}</div>
                  </Td>
                  <Td>{cell(s.permit_required, (v) => (v ? "Yes" : "No"))}</Td>
                  <Td>
                    {cell(s.license_cost_usd, (v) =>
                      v === "none" ? "None" : v === "varies" ? "Varies" : `$${v.toLocaleString()}`,
                    )}
                  </Td>
                  <Td>
                    {cell(s.sales_cap_usd_annual, (v) =>
                      v === "none" ? "No cap" : `$${v.toLocaleString()}`,
                    )}
                  </Td>
                  <Td>{ch ? (ch.online_in_state ? "Yes" : "No") : "—"}</Td>
                  <Td>{ch ? (ch.online_out_of_state ? "Yes" : "No") : "—"}</Td>
                  <Td>{cell(s.training_required, (v) => (v ? "Yes" : "No"))}</Td>
                  <Td>{cell(s.inspection_required, (v) => (v ? "Yes" : "No"))}</Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="citation mt-4">"—" indicates a field that has not been verified yet.</p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-2 font-serif text-sm font-semibold">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}
