# ReportMate Marketing Website

Source for [reportmate.app](https://reportmate.app) -- the marketing website for ReportMate.

## Stack

- [Astro](https://astro.build) -- static site generator
- [Tailwind CSS](https://tailwindcss.com) -- utility-first CSS
- Deployed to [Cloudflare Pages](https://pages.cloudflare.com) by `.github/workflows/deploy.yml` on every push to `main`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` -- a plain static bundle you can serve from any static host.

## Pages

- `/` -- Homepage (hero, value props, CTA)
- `/features` -- Feature breakdown with module details
- `/pricing` -- Self-hosted (free) + Cloud tiers
