# ReportMate Marketing Website

Source for [reportmate.app](https://reportmate.app) -- the marketing website for ReportMate.

## Stack

- [Astro](https://astro.build) -- static site generator
- [Tailwind CSS](https://tailwindcss.com) -- utility-first CSS
- Hosted on Cloudflare Pages

## Development

Development guide: [wiki](wiki/README.md)

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. A push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `reportmate-website` Cloudflare Pages project with Wrangler, using the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

## Pages

- `/` -- Homepage (hero, value props, CTA)
- `/features` -- Feature breakdown with module details
- `/architecture` -- How the client, API and web app fit together
- `/pricing` -- Self-hosted (free) + Cloud tiers
- `/docs` -- Interactive API reference rendered from `public/openapi.json`
