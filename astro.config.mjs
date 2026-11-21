import { defineConfig } from 'astro/config';

// SITE_URL / PAGES_BASE are set at build time when publishing (e.g. GitHub Pages
// under a sub-path). Locally both fall back to the root.
const site = process.env.SITE_URL || 'https://olimov.example';
const base = process.env.PAGES_BASE || '/';

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
