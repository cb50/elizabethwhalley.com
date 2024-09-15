// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

export const locales = {
    en: { label: 'English', lang: 'en' },
    fr: { label: 'Français', lang: 'fr' },
};

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Elizabeth Whalley',
         // Set English as the default language for this site.
         defaultLocale: 'en',
         locales,
      social: {
          instagram: 'https://www.instagram.com/elizabethwhalleyprojects/',
      },
      plugins: [starlightImageZoom()],
      customCss: [
          // Relative path to your custom CSS file
          './src/styles/custom.css',
        ],
      sidebar: [
          {
              label: 'Group Shows',
              translations: {
                  fr: 'Expositions Collectives',
              },
              autogenerate: { directory: 'group-shows' },
          },
          {
              label: 'Solo Shows',
              translations: {
                  fr: 'Expositions Solo',
              },
              autogenerate: { directory: 'solo-shows' },
          },
      ],
      }), tailwind()],

  output: 'server',
  adapter: vercel(),
  redirects: {
    '/': '/en'
  }
});