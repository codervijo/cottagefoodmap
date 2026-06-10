import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { FOODS_BY_SLUG, FOODS, statusForFood } from "@/data/foods";
import { STATES } from "@/data/states";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/foods/$slug")({
  loader: ({ params }) => {
    const food = FOODS_BY_SLUG[params.slug];
    if (!food) throw notFound();
    return { food };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.food.name ?? params.slug;
    return {
      meta: [
        { title: `${name} as a Cottage Food — Where It's Allowed` },
        { name: "description", content: `Where you can legally sell ${name.toLowerCase()} as a cottage food. State-by-state status with sources.` },
        { property: "og:title", content: `${name} as a Cottage Food` },
        { property: "og:url", content: `/foods/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/foods/${params.slug}` }],
    };
  },
  component: FoodDetail,
  notFoundComponent: () => (
    <div className="container-prose py-16">
      <h1 className="font-serif text-3xl">Food category not found</h1>
      <p className="mt-2 text-muted-foreground">
        <Link to="/foods">Browse all categories</Link>.
      </p>
    </div>
  ),
});

function FoodDetail() {
  const { food } = Route.useLoaderData();
  const rows = STATES.map((s) => ({ state: s, status: statusForFood(s, food) }));

  return (
    <article className="container-prose py-10">
      <p className="citation">Food category</p>
      <h1 className="font-serif text-4xl">{food.name}</h1>
      <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{food.description}</p>
      <div className="mt-4"><Disclaimer /></div>

      <div className="double-rule mt-8 pt-6" />

      <h2 className="font-serif text-xl">Status by state</h2>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {rows.map(({ state, status }) => (
          <li key={state.slug} className="flex flex-wrap items-center justify-between gap-2 py-3">
            <Link to="/states/$slug" params={{ slug: state.slug }} className="no-underline">
              <span className="font-serif text-base text-foreground">{state.name}</span>{" "}
              <span className="citation">/{state.abbreviation}</span>
            </Link>
            <span
              className={`badge-chip ${
                status === "allowed" ? "badge-yes" : status === "prohibited" ? "badge-no" : "badge-unverified"
              }`}
            >
              {status === "allowed" ? "Allowed" : status === "prohibited" ? "Prohibited" : "Unclear"}
            </span>
          </li>
        ))}
      </ul>
      <p className="citation mt-4">
        Status is derived from each state's allowed and prohibited lists. "Unclear" means the
        category is not named in the official list — confirm with the cited state page.
      </p>

      <div className="mt-10">
        <h2 className="font-serif text-xl">Related categories</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
          {FOODS.filter((f) => f.slug !== food.slug).map((f) => (
            <li key={f.slug}>
              <Link to="/foods/$slug" params={{ slug: f.slug }}>{f.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
