import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://upos.ge',
  integrations: [sitemap()],
  build: { format: 'directory' },
  compressHTML: true,
});
