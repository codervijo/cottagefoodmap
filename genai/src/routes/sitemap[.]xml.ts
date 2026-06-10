import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { STATES } from "@/data/states";
import { FOODS } from "@/data/foods";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = [
          "/",
          "/states",
          "/compare",
          "/foods",
          "/guides",
          "/about",
          ...STATES.map((s) => `/states/${s.slug}`),
          ...FOODS.map((f) => `/foods/${f.slug}`),
          ...STATES.map((s) => `/guides/license-cost/${s.slug}`),
          ...STATES.map((s) => `/guides/labeling/${s.slug}`),
          ...FOODS.flatMap((f) =>
            STATES.map((s) => `/guides/sell/${f.slug}/${s.slug}`),
          ),
        ];
        const urls = paths
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>monthly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
