import type { Fact } from "../data/schema";
import { isUnverified } from "../data/schema";
import type { ReactNode } from "react";

interface FactRowProps {
  label: string;
  // Use a permissive shape — TanStack/Fact<T> is a discriminated union and
  // inference into a generic render callback is unreliable across call sites.
  fact: Fact<any>;
  render?: (value: any) => ReactNode;
}

function formatDate(iso: string) {
  try {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return iso;
  }
}

export function FactRow({ label, fact, render }: FactRowProps) {
  if (isUnverified(fact)) {
    return (
      <div className="grid grid-cols-1 gap-1 py-3 md:grid-cols-[14rem_1fr] md:gap-6">
        <dt className="font-serif text-sm font-semibold text-foreground md:text-base">{label}</dt>
        <dd className="text-sm">
          <span className="badge-chip badge-unverified">Unverified</span>
          {fact.note && <p className="mt-1 text-muted-foreground">{fact.note}</p>}
        </dd>
      </div>
    );
  }
  const value = fact.value;
  return (
    <div className="grid grid-cols-1 gap-1 py-3 md:grid-cols-[14rem_1fr] md:gap-6">
      <dt className="font-serif text-sm font-semibold text-foreground md:text-base">{label}</dt>
      <dd className="text-sm text-foreground">
        <div className="text-[0.95rem] leading-relaxed">
          {render ? render(value) : String(value)}
        </div>
        {fact.notes && <p className="mt-1 text-muted-foreground">{fact.notes}</p>}
        <p className="citation mt-2">
          Source:{" "}
          <a href={fact.source_url} target="_blank" rel="noopener noreferrer">
            {fact.source_title ?? fact.source_url}
          </a>{" "}
          · Verified {formatDate(fact.last_verified)}
        </p>
      </dd>
    </div>
  );
}

export function YesNo({ value }: { value: boolean }) {
  return (
    <span className={`badge-chip ${value ? "badge-yes" : "badge-no"}`}>
      {value ? "Yes" : "No"}
    </span>
  );
}

export function MoneyOrNone({ value }: { value: number | "none" | "varies" }) {
  if (value === "none") return <span>None</span>;
  if (value === "varies") return <span>Varies by jurisdiction</span>;
  return <span>${value.toLocaleString()}</span>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
