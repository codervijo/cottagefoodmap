import { createFileRoute, Link } from "@tanstack/react-router";
import { STATES } from "@/data/states";
import { FOODS } from "@/data/foods";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cottage Food Law /US — Sourced reference to home-food rules in every state" },
      { name: "description", content: "Permits, sales caps, allowed foods, labeling, and sales channels for cottage food operations in every U.S. state. Every fact links to an official source." },
      { property: "og:title", content: "Cottage Food Law /US" },
      { property: "og:description", content: "Sourced reference to home-food rules in every U.S. state." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="container-prose py-10 md:py-14">
      <div className="max-w-3xl">
        <p className="citation mb-3">A structured legal reference · {STATES.length} states covered</p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Cottage food laws, citation by citation.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A free, sourced reference to U.S. cottage food laws — permits, sales caps, allowed and
          prohibited foods, labeling rules, and sales channels. Every fact links to the state
          agency, statute, or official PDF it came from, with a verification date.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/states" className="rounded border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground no-underline hover:no-underline">
            Browse states
          </Link>
          <Link to="/compare" className="rounded border border-border bg-background px-4 py-2 text-sm font-medium text-foreground no-underline hover:bg-muted">
            Compare side by side
          </Link>
        </div>
        <div className="mt-6"><Disclaimer /></div>
      </div>

      <div className="double-rule mt-12 pt-8" />

      <section>
        <h2 className="font-serif text-2xl">States covered</h2>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-3">
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link to="/states/$slug" params={{ slug: s.slug }} className="no-underline">
                {s.name} <span className="citation">/{s.abbreviation}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">By food category</h2>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-3">
          {FOODS.map((f) => (
            <li key={f.slug}>
              <Link to="/foods/$slug" params={{ slug: f.slug }} className="no-underline">
                {f.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl">How to use this site</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>Open your state page for the full rule set with citations.</li>
          <li>Use the comparison table to see how requirements differ across states.</li>
          <li>Open a food category page to see where that food is allowed or prohibited.</li>
          <li>Read the cited source. This site does not replace primary sources or legal advice.</li>
        </ol>
      </section>
    </div>
  );
}
