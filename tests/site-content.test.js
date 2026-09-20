import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('all Paddle review policy pages exist and are linked in the footer', async () => {
  const layout = await read('src/layouts/BaseLayout.astro');
  for (const page of ['terms', 'privacy', 'refund-policy', 'contact']) {
    await assert.doesNotReject(() => read(`src/pages/${page}.astro`));
    assert.match(layout, new RegExp(`url\\('${page}/'\\)`));
  }
});

test('GitHub Pages base path preserves trailing slash for internal URLs', async () => {
  const config = await read('astro.config.mjs');
  assert.match(config, /`\/\$\{repositoryName\}\/`/);
});

test('pricing clearly states currency, tax and renewal', async () => {
  const pricing = await read('src/pages/pricing.astro');
  assert.match(pricing, /USD/);
  assert.match(pricing, /taxes/i);
  assert.match(pricing, /renew automatically/i);
});

test('terms identify seller, Paddle role and buyer commitments', async () => {
  const terms = await read('src/pages/terms.astro');
  assert.match(terms, /company\.legalName/);
  assert.match(terms, /Merchant of Record/);
  assert.match(terms, /renew automatically/i);
  assert.match(terms, /Refund Policy/);
});

test('checkout has noindex and requires terms acceptance context', async () => {
  const checkout = await read('src/pages/checkout.astro');
  assert.match(checkout, /noindex/);
  assert.match(checkout, /By continuing, you agree/);
  assert.match(checkout, /PUBLIC_PADDLE_CLIENT_TOKEN/);
});
