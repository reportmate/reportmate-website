# ReportMate Marketing Website

Source for [reportmate.app](https://reportmate.app) -- the marketing website for ReportMate.

## Stack

- [Astro](https://astro.build) -- static site generator
- [Tailwind CSS](https://tailwindcss.com) -- utility-first CSS
- Hosted on AWS (S3 + CloudFront)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` -- deploy to S3 or any static host.

## Pages

- `/` -- Homepage (hero, value props, CTA)
- `/features` -- Feature breakdown with module details
- `/pricing` -- Self-hosted (free) + Cloud tiers
