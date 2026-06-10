import { createFileRoute, Link } from "@tanstack/react-router";
import { STATES } from "@/data/states";
import { FOODS } from "@/data/foods";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Cottage Food Guides — Costs, Labeling, Selling From Home" },
      { name: "description", content: "Quick guides answering common cottage food questions per state: license cost, labeling, and selling specific foods from home." },
      { property: "og:title", content: "Cottage Food Guides" },
      { property: "og:url", content: "/guides" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="container-prose py-10">
      <h1 className="font-serif text-3xl md:text-4xl">Guides</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Short, sourced answers to the questions people search for most. Every answer links back to
        the official state page it came from.
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-2xl">Cottage food license cost</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link to="/guides/license-cost/$state" params={{ state: s.slug }}>
                Cottage food license cost in {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Labeling requirements</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link to="/guides/labeling/$state" params={{ state: s.slug }}>
                Cottage food labeling requirements in {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Can I sell this from home?</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          {FOODS.flatMap((f) =>
            STATES.map((s) => (
              <li key={`${f.slug}-${s.slug}`}>
                <Link to="/guides/sell/$food/$state" params={{ food: f.slug, state: s.slug }}>
                  Can I sell {f.name.toLowerCase()} from home in {s.name}?
                </Link>
              </li>
            )),
          )}
        </ul>
      </section>
    </div>
  );
}
