import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="border-b border-rule bg-background">
      <div className="container-prose flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link to="/" className="no-underline">
          <div className="font-serif text-xl font-semibold text-foreground">
            Cottage Food Law <span className="text-primary">/US</span>
          </div>
          <div className="citation mt-0.5">A structured reference to state cottage food rules</div>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link to="/states" className="text-foreground no-underline hover:underline">States</Link>
          <Link to="/compare" className="text-foreground no-underline hover:underline">Compare</Link>
          <Link to="/foods" className="text-foreground no-underline hover:underline">Foods</Link>
          <Link to="/guides" className="text-foreground no-underline hover:underline">Guides</Link>
          <Link to="/about" className="text-foreground no-underline hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-rule bg-muted/40">
      <div className="container-prose py-8 text-sm text-muted-foreground">
        <p className="font-serif text-base text-foreground">
          Informational reference only — not legal advice.
        </p>
        <p className="mt-2 max-w-3xl">
          Cottage food laws change frequently and are administered differently at the local level.
          Always consult the official agency cited on each page, and confirm requirements with your
          state or county before selling food. Last reviewed dates are shown on every fact.
        </p>
        <p className="citation mt-4">© {new Date().getFullYear()} Cottage Food Law /US</p>
      </div>
    </footer>
  );
}

export function Disclaimer() {
  return (
    <div className="rounded border border-warning/50 bg-warning/10 px-3 py-2 text-sm text-foreground">
      <strong className="font-semibold">Informational only — not legal advice.</strong>{" "}
      Verify every requirement with the official agency cited below before producing or selling food.
    </div>
  );
}
