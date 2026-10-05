# cottagefoodmap.com

Per-state reference for US cottage food law: license cost, permits, allowed and prohibited
foods, labeling, and sales channels. Every fact is cited to an official source and dated;
facts that can't be confirmed are shown as gaps. Live at https://cottagefoodmap.com/.

Static Astro site (pnpm) deployed to Cloudflare Pages on push to `main`. Builds run in the
sites/* docker container:

```bash
make buildsh   # from sites/: shell into the container
make run       # dev server
make test      # install + build + test
```

Agent guide: `AI_AGENTS.md`. Roadmap: `docs/prd.md`. Architecture: `docs/architecture.md`.
