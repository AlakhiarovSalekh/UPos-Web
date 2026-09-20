# UPos website

Premium marketing and commerce website for UPos, built as a static Astro site.

## Local development

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm test
npm run build
```

## Production configuration

Copy `.env.example` to the environment settings of the hosting provider. Set the canonical production URL and Paddle Billing client-side token/price IDs. The checkout intentionally shows a contact fallback until valid Paddle values are configured.

Before submitting a domain for Paddle review, verify the business identity, support email and governing-law details in `src/data/site.ts`, then deploy over HTTPS.
