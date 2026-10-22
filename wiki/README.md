# ReportMate website wiki

The website owns ReportMate's public face at reportmate.app: the product overview, the feature and module breakdown, the architecture explainer, pricing, and the interactive API reference. It is a static site and holds no fleet data; the API reference reads a copy of the OpenAPI spec that the API repository exports.

## Read first

- [Project setup and supported commands](../README.md)
- [Astro configuration](../astro.config.mjs)
- [Deployment workflow](../.github/workflows/deploy.yml)
- [OpenAPI sync workflow](../.github/workflows/openapi-sync.yml)

## Architecture

The site uses Astro with static output and Tailwind CSS through the Astro Tailwind integration. Each route is one file under [src/pages](../src/pages): [index.astro](../src/pages/index.astro), [features.astro](../src/pages/features.astro), [architecture.astro](../src/pages/architecture.astro), [pricing.astro](../src/pages/pricing.astro) and [docs.astro](../src/pages/docs.astro).

Every page renders inside the shared [Layout](../src/layouts/Layout.astro), which sets the title, description, canonical URL, social card and navigation. Reusable pieces live in [src/components](../src/components): the feature section block, a Mermaid diagram wrapper, and small data-visualisation marks under `dataviz/`.

Module names, one-line summaries and full field lists come from [src/data/modules.js](../src/data/modules.js), which the homepage grid, the features page and the pricing page all import. Change a module's description there rather than in a page.

The API reference page loads Stoplight Elements from a pinned CDN version and renders [public/openapi.json](../public/openapi.json). Screenshots, icons, the logo and the social card also live in [public](../public) and are served as-is.

## Development and verification

Install dependencies with `npm install`, run the development server with `npm run dev`, and produce the static build in `dist/` with `npm run build`. `npm run preview` serves that build locally. The repository has no test suite; a clean `npm run build` and a look at the changed pages in the preview are the checks.

Do not edit `public/openapi.json` by hand. The [OpenAPI sync workflow](../.github/workflows/openapi-sync.yml) runs daily, exports the spec from the reportmate-api source, commits it to `main` when it changed and then starts a deploy.

A push to `main` runs the [deployment workflow](../.github/workflows/deploy.yml), which builds the site and publishes `dist/` to Cloudflare Pages. Pull requests run no workflow, so verify the build locally before merging.

## Documentation ownership

Keep this wiki as the entry point and update the linked pages where the facts belong. Product behaviour, API routes and module fields belong to their own repositories; the website describes them and should follow those sources rather than lead them. Examples use fictional data. Deployment inventories, credentials, provider mappings and organization-specific operations belong with their deployment owner.
