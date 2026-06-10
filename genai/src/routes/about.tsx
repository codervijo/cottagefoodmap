import { createFileRoute } from "@tanstack/react-router";
import { Disclaimer } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cottage Food Law /US" },
      { name: "description", content: "Editorial policy, sourcing standards, and disclaimer for Cottage Food Law /US." },
      { property: "og:title", content: "About — Cottage Food Law /US" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="container-prose max-w-3xl py-10">
      <h1 className="font-serif text-3xl md:text-4xl">About this reference</h1>
      <div className="mt-4"><Disclaimer /></div>

      <h2 className="mt-8 font-serif text-2xl">Sourcing policy</h2>
      <p className="mt-3">
        Every factual claim on this site links to one of: a state .gov agency page, a state
        statute, or an official PDF. Editorial summaries are kept separate from facts. When a
        field has not been verified to that standard, it is shown as
        <span className="mx-1 badge-chip badge-unverified">Unverified</span>
        rather than guessed.
      </p>

      <h2 className="mt-8 font-serif text-2xl">Last verified dates</h2>
      <p className="mt-3">
        Each field shows the date it was last checked against its cited source. Page-level "last
        reviewed" dates indicate the most recent full re-read of the state's program.
      </p>

      <h2 className="mt-8 font-serif text-2xl">Not legal advice</h2>
      <p className="mt-3">
        This site is an informational reference, not legal advice. Cottage food laws change, are
        administered locally, and interact with zoning, sales tax, and federal food rules. Before
        you produce or sell food, consult the official source cited and, if needed, an attorney
        licensed in your state.
      </p>

      <h2 className="mt-8 font-serif text-2xl">Editing the data</h2>
      <p className="mt-3">
        State data lives as strict-schema JSON/TypeScript files under{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">src/data/states/</code>. Every
        factual field requires an official source URL and a verification date. Pull requests
        welcome.
      </p>
    </div>
  );
}
