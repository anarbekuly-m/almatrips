import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://almatrips.kz',
  integrations: [sitemap()],
  redirects: {
    '/tours': '/private-tours',
    '/ru/tours': '/ru/private-tours',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
