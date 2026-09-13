import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// STEFAN: replace site URL with your real GitHub Pages URL, e.g.
//   https://USERNAME.github.io   (user/org site — keep base: '/')
//   https://USERNAME.github.io/loja-ana/  (project site — set base: '/loja-ana/')
export default defineConfig({
  site: 'https://example.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
