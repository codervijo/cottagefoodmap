import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getState } from "@/data/states";
import { isUnverified } from "@/data/schema";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/guides/labeling/$state")({
  loader: ({ params }) => {
    const state = getState(params.state);
    if (!state) throw notFound();
    return { state };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.state.name ?? params.state;
    return {
      meta: [
        { title: `Cottage Food Labeling Requirements in ${name}` },
        { name: "description", content: `Required cottage food label elements in ${name}, with the official source.` },
        { property: "og:title", content: `Cottage Food Labeling Requirements in ${name}` },
        { property: "og:url", content: `/guides/labeling/${params.state}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/guides/labeling/${params.state}` }],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-prose py-16">
      <h1 className="font-serif text-3xl">State not found</h1>
      <p className="mt-2"><Link to="/guides">Back to guides</Link></p>
    </div>
  ),
});

function Page() {
  const { state } = Route.useLoaderData();
  const lab = state.labeling_requirements;

  return (
    <article className="container-prose py-10">
      <p className="citation">Guide · Labeling</p>
      <h1 className="font-serif text-3xl md:text-4xl">Cottage food labeling requirements in {state.name}</h1>
      <div className="mt-4"><Disclaimer /></div>

      {isUnverified(lab) ? (
        <p className="mt-6">Unverified — see the official {state.name} agency for current label rules.</p>
      ) : (
        <>
          <p className="mt-6 text-lg">
            Each package of cottage food sold in {state.name} must include:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5">
            {lab.value.map((l: string) => <li key={l}>{l}</li>)}
          </ul>
          <div className="mt-6 rounded border border-border bg-card p-4 text-sm">
            <p className="font-medium">Source</p>
            <p className="citation mt-1">
              <a href={lab.source_url} target="_blank" rel="noopener noreferrer">
                {lab.source_title ?? lab.source_url}
              </a>{" "}
              · Verified {lab.last_verified}
            </p>
          </div>
        </>
      )}

      <p className="mt-8 text-sm">
        See the full <Link to="/states/$slug" params={{ slug: state.slug }}>{state.name} cottage food page</Link>.
      </p>
    </article>
  );
}
