import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site || new URL('https://upos-web.salekhallahyarov.workers.dev');
  const sitemap = new URL(`${base}sitemap-index.xml`, origin);

  return new Response(`User-agent: *\nAllow: /\nDisallow: ${base}checkout/\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
