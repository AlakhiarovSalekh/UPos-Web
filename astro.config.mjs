import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'UPos-Web';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || (isGitHubPages ? 'https://alakhiarovsalekh.github.io' : 'https://upos.ge'),
  base: isGitHubPages ? `/${repositoryName}/` : '/',
  integrations: [sitemap()],
  build: { format: 'directory' },
  compressHTML: true,
});
