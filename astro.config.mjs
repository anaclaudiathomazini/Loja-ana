import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// STEFAN: project Pages URL for anaclaudiathomazini/Loja-ana.
// Custom domain later: set site to https://yourdomain.com and base: '/'.
export default defineConfig({
  site: 'https://anaclaudiathomazini.github.io',
  base: '/Loja-ana/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
