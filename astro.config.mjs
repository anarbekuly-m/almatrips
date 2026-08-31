import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { posts } from './src/data/posts';

// Blog posts carry their own publish date; everything else uses the build
// date. lastmod tells Google which pages changed, so it recrawls sooner.
const buildDate = new Date();
const postDate = new Map();
for (const p of posts) {
  postDate.set(`/blog/${p.slug}/`, new Date(p.date));
  postDate.set(`/ru/blog/${p.slug}/`, new Date(p.date));
}

export default defineConfig({
  site: 'https://almatrips.kz',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = postDate.get(path) ?? buildDate;
        return item;
      },
    }),
  ],
  redirects: {
    '/tours': '/group-tours',
    '/ru/tours': '/ru/group-tours',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
