// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cottagefoodmap.com',
  integrations: [sitemap(), react()],
  output: 'static',
  // Cloudflare serves directory-format pages at /path/ and 308s /path → /path/.
  // Keep canonicals, internal links, and the sitemap on the final 200 URL.
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
