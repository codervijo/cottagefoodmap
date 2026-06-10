import { createFileRoute, Link } from "@tanstack/react-router";
import { FOODS } from "@/data/foods";

export const Route = createFileRoute("/foods/")({
  head: () => ({
    meta: [
      { title: "Cottage Food Categories — Where Each Food Is Allowed" },
      { name: "description", content: "Browse cottage food categories — jams, baked goods, candy, honey, pickles — and see where each is allowed or prohibited." },
      { property: "og:title", content: "Cottage Food Categories" },
      { property: "og:url", content: "/foods" },
    ],
    links: [{ rel: "canonical", href: "/foods" }],
  }),
  component: FoodsIndex,
});

function FoodsIndex() {
  return (
    <div className="container-prose py-10">
      <h1 className="font-serif text-3xl md:text-4xl">Foods, state by state</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Pick a category to see where it can be sold as a cottage food, where it's prohibited, and
        where the rules are unclear.
      </p>
      <ul className="mt-8 divide-y divide-rule border-t border-rule">
        {FOODS.map((f) => (
          <li key={f.slug} className="py-4">
            <Link to="/foods/$slug" params={{ slug: f.slug }} className="no-underline">
              <h2 className="font-serif text-xl text-foreground">{f.name}</h2>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
