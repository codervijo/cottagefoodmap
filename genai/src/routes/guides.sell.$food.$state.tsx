import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getState } from "@/data/states";
import { FOODS_BY_SLUG, statusForFood } from "@/data/foods";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/guides/sell/$food/$state")({
  loader: ({ params }) => {
    const state = getState(params.state);
    const food = FOODS_BY_SLUG[params.food];
    if (!state || !food) throw notFound();
    return { state, food };
  },
  head: ({ params, loaderData }) => {
    const food = loaderData?.food.name ?? params.food;
    const state = loaderData?.state.name ?? params.state;
    return {
      meta: [
        { title: `Can I sell ${food.toLowerCase()} from home in ${state}?` },
        { name: "description", content: `Whether ${food.toLowerCase()} can legally be sold from a home kitchen in ${state} under cottage food law, with the official source.` },
        { property: "og:title", content: `Can I sell ${food.toLowerCase()} from home in ${state}?` },
        { property: "og:url", content: `/guides/sell/${params.food}/${params.state}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/guides/sell/${params.food}/${params.state}` }],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-prose py-16">
      <h1 className="font-serif text-3xl">Not found</h1>
      <p className="mt-2"><Link to="/guides">Back to guides</Link></p>
    </div>
  ),
});

function Page() {
  const { state, food } = Route.useLoaderData();
  const status = statusForFood(state, food);

  const headline =
    status === "allowed"
      ? `Yes — ${food.name.toLowerCase()} is allowed under ${state.name} cottage food law.`
      : status === "prohibited"
        ? `No — ${food.name.toLowerCase()} is not allowed under ${state.name} cottage food law.`
        : `It's unclear from ${state.name}'s official list. Confirm with the state agency before producing.`;

  return (
    <article className="container-prose py-10">
      <p className="citation">Guide · Selling from home</p>
      <h1 className="font-serif text-3xl md:text-4xl">
        Can I sell {food.name.toLowerCase()} from home in {state.name}?
      </h1>
      <div className="mt-4"><Disclaimer /></div>

      <p className="mt-6 text-lg leading-relaxed">{headline}</p>

      <p className="mt-4 text-sm text-muted-foreground">
        Status is derived from {state.name}'s official allowed and prohibited foods lists. Even when
        a food is allowed, you still must meet that state's permit, labeling, and sales-channel rules.
      </p>

      <p className="mt-8 text-sm">
        Read the full{" "}
        <Link to="/states/$slug" params={{ slug: state.slug }}>{state.name} cottage food page</Link>{" "}
        or see the{" "}
        <Link to="/foods/$slug" params={{ slug: food.slug }}>{food.name}</Link> category across states.
      </p>
    </article>
  );
}
