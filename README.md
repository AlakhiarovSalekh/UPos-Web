# UPos Web — Astro, TypeScript, Cloudflare & Paddle

[![Astro](https://img.shields.io/badge/Astro-Static%20Site-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Wrangler-F38020?logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers/wrangler/)
[![Stars](https://img.shields.io/github/stars/AlakhiarovSalekh/UPos-Web?style=social)](https://github.com/AlakhiarovSalekh/UPos-Web/stargazers)

The public marketing and commerce website for UPos, built with Astro and TypeScript with Cloudflare deployment tooling and Paddle checkout configuration hooks.

## Tech Stack

- Astro
- TypeScript
- Node.js 20+
- Cloudflare Wrangler
- Paddle Billing configuration
- Node test runner

## Local Development

```bash
git clone https://github.com/AlakhiarovSalekh/UPos-Web.git
cd UPos-Web
npm install
npm run dev
```

## Quality Gates

```bash
npm test
npm run check
npm run build
```

## Deployment

The repository includes Wrangler configuration and a deployment script:

```bash
npm run deploy
```

Production values should be supplied through the hosting environment rather than committed secrets. The site reads configuration such as the canonical production URL and Paddle client-side/price identifiers from environment settings.

## Repository Structure

```text
public/           Static assets
src/              Astro site source
tests/            Node-based tests
astro.config.mjs  Astro configuration
wrangler.jsonc    Cloudflare deployment configuration
.env.example      Environment variable template
```

## Commerce / Paddle Notes

Before using the site for a real billing flow, verify the public business identity, support details, legal content, production domain, and Paddle configuration expected by the site. Client callbacks should not be treated as authoritative billing state.

## Contributing

Bug fixes, accessibility improvements, performance work, tests, and documentation improvements are welcome.

> If this project is useful to you, consider starring the repository. It helps you find it again and helps other developers discover the project.

## More Projects by Salekh

- [SalekhPos](https://github.com/AlakhiarovSalekh/SalekhPos) — security-focused retail/POS platform under active development.
- [Inventory Management Desktop App](https://github.com/AlakhiarovSalekh/Inventory-App) — Python/PyQt inventory application.
- [50 Projects — HTML, CSS & JavaScript](https://github.com/AlakhiarovSalekh/50-Projects-HTML-CSS-JavaScript) — frontend practice collection.

## Author

**Salekh Alakhiarov** · [GitHub](https://github.com/AlakhiarovSalekh)
