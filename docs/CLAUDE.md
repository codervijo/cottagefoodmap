# CLAUDE.md — cottagefoodmap.com

Per-project orientation for Claude. Read this first when picking up
work on this site. Index of conventions, deferred decisions, and
non-features that aren't obvious from the code or git history.

## Project

A per-state reference for US cottage food law — license cost, permits, allowed foods,
labeling, sales channels — for home bakers and small food sellers, with every fact cited
to an official source and dated. Static Astro + pnpm on Cloudflare Pages, built through
the sites/* workspace Makefile and the central builder.

## Commands

```bash
# Build / dev (forwards to the parent Makefile)
make deps           # install deps via the central builder
make dev            # local dev server
make build          # production build → dist/

# Test (per-stack — adjust as needed)
make test           # if a test suite is wired in

# Deploy
git push            # Cloudflare Pages auto-builds on push to main
```

## Conventions

  - Build path: this project's `Makefile` → `../Makefile` (parent
    workspace) → `~/work/projects/builder/` (central builder).
  - Stack: pnpm-only. No `package-lock.json` / `bun.lockb` / `yarn.lock`.
  - Deploy: Cloudflare Pages via `wrangler.jsonc`. No `_redirects`
    SPA fallback (uses CF's `not_found_handling` instead).

## Heading hygiene

**Before adding any section, subsection, or heading to a Markdown
file, output the file's current heading outline first:**

```bash
grep -nE '^#+ ' path/to/file.md
```

Then confirm — in the chat — that the planned new heading's:

1. **Depth** (`#`, `##`, `###`, …) is the intended depth, not
   accidentally one level too shallow.
2. **Label** doesn't collide with existing headings — no duplicate
   `## 1. <title>`, no `### N.X` subsection labels that look like
   `vN.X` phase identifiers.

Only after that confirmation, write.

Applies especially to long-lived docs: `docs/prd.md`, `AI_AGENTS.md`,
`docs/architecture.md`, `docs/CLAUDE.md`.

**Why:** structural drift is invisible in any single editing session
— it only becomes obvious in the aggregate, by which time the doc is
hard to fix. The pre-edit outline ritual catches collisions and depth
mistakes at the point of writing, not at quarterly cleanup time.

## Deferred decisions

Things deliberately *not* shipped. Append entries with rationale so
future Claude sessions don't re-propose them. Source: `docs/prd.md` §3 non-goals.

- **Legal advice.** The site is an informational reference that points to the official
  agency; every page carries the "not legal advice" disclaimer.
- **Monetization** (email capture, affiliate, lead-gen, paid toolkit) — not on the v1–v5
  roadmap.
- **Generic "[state] cottage food law" head terms.** Answered inline by AI Overviews and
  dominated by .gov; the site targets specific cost / permit / food / labeling queries.
- **Freshness automation before v4.** Staleness flags, source watchers, and the change
  tracker are v4 work.
- **Guessed facts.** A fact that can't be confirmed from an official source is
  `Unverified` and renders as a gap (ADR-006, ADR-008).
