# Server-side code dropped during the Astro port

The source (`genai/`) was a TanStack Start app with a server runtime. Astro
here is configured for **static output** (`output: 'static'`), so the
server-only pieces below did NOT translate. They are recorded here as
`TODO:` markers in case server behavior is needed later (would require an
Astro SSR adapter).

## Dropped files

- TODO: `genai/src/server.ts` — TanStack Start server entry. No Astro
  equivalent in static mode.
- TODO: `genai/src/start.ts` — TanStack Start client/runtime bootstrap.
- TODO: `genai/src/router.tsx` — TanStack Router + React Query client
  creation. Replaced by Astro file-based routing; React Query was only used
  to satisfy the router context and is not needed for the static content.
- TODO: `genai/src/routes/__root.tsx` — root shell/head/error/404. Ported:
  - head/meta → `src/layouts/Layout.astro` + per-page `src/components/Seo.astro`
  - Header/Footer → `src/layouts/Layout.astro`
  - NotFound/Error boundaries → not ported (Astro static 404 can be added as
    `src/pages/404.astro` if desired).
- TODO: `genai/src/routes/sitemap[.]xml.ts` — dynamic sitemap handler.
  Replaced by the `@astrojs/sitemap` integration already wired in
  `astro.config.mjs` (auto-generates from built routes).
- TODO: `genai/src/lib/api/example.functions.ts` — TanStack server functions
  (example). No client consumer in the ported UI.
- TODO: `genai/src/lib/config.server.ts` — server-only config.
- TODO: `genai/src/lib/error-capture.ts`, `error-page.ts`,
  `lovable-error-reporting.ts` — Lovable runtime error reporting. Tied to the
  React/TanStack runtime; not relevant to static output.

## Not ported (unused by the operator-visible pages)

- `genai/src/components/ui/*` — full shadcn/ui kit. None of the ported routes
  imported any `ui/*` component, so the kit (and its radix/cva/lucide deps)
  was not brought over. Re-add on demand if a future component needs it.
- `genai/src/hooks/use-mobile.tsx` — unused by ported pages.
- `genai/src/routeTree.gen.ts` — generated TanStack route tree; obsolete under
  Astro routing.
