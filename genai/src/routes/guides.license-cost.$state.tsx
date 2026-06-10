import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getState } from "@/data/states";
import { isUnverified } from "@/data/schema";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/guides/license-cost/$state")({
  loader: ({ params }) => {
    const state = getState(params.state);
    if (!state) throw notFound();
    return { state };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.state.name ?? params.state;
    return {
      meta: [
        { title: `Cottage Food License Cost in ${name}` },
        { name: "description", content: `What does a cottage food license cost in ${name}? Sourced answer with citation to the official state agency.` },
        { property: "og:title", content: `Cottage Food License Cost in ${name}` },
        { property: "og:url", content: `/guides/license-cost/${params.state}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/guides/license-cost/${params.state}` }],
    };
  },
  component: Page,
  notFoundComponent: () => <NotFound />,
});

function NotFound() {
  return (
    <div className="container-prose py-16">
      <h1 className="font-serif text-3xl">State not found</h1>
      <p className="mt-2"><Link to="/guides">Back to guides</Link></p>
    </div>
  );
}

function Page() {
  const { state } = Route.useLoaderData();
  const cost = state.license_cost_usd;
  const permit = state.permit_required;

  let answer = "Unverified — check the official source below.";
  if (!isUnverified(cost)) {
    if (cost.value === "none") answer = `${state.name} does not charge a state cottage food license fee.`;
    else if (cost.value === "varies") answer = `${state.name} sets cottage food fees at the local level — they vary by jurisdiction.`;
    else answer = `${state.name} charges $${cost.value.toLocaleString()} for a cottage food license.`;
  }

  return (
    <article className="container-prose py-10">
      <p className="citation">Guide · License cost</p>
      <h1 className="font-serif text-3xl md:text-4xl">Cottage food license cost in {state.name}</h1>
      <div className="mt-4"><Disclaimer /></div>

      <p className="mt-6 text-lg leading-relaxed">{answer}</p>

      {!isUnverified(permit) && (
        <p className="mt-3 text-sm text-muted-foreground">
          {permit.value
            ? `${state.name} requires a state permit or registration to operate as a cottage food producer.`
            : `${state.name} does not require a state-issued permit.`}
        </p>
      )}

      <div className="mt-6 rounded border border-border bg-card p-4 text-sm">
        <p className="font-medium">Source</p>
        {!isUnverified(cost) ? (
          <p className="citation mt-1">
            <a href={cost.source_url} target="_blank" rel="noopener noreferrer">
              {cost.source_title ?? cost.source_url}
            </a>{" "}
            · Verified {cost.last_verified}
          </p>
        ) : (
          <p className="citation mt-1">No verified source yet.</p>
        )}
      </div>

      <p className="mt-8 text-sm">
        See the full <Link to="/states/$slug" params={{ slug: state.slug }}>{state.name} cottage food page</Link>{" "}
        for permit details, sales cap, allowed foods, and labeling rules.
      </p>
    </article>
  );
}
