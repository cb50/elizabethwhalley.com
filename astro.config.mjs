// @ts-check

import embeds from 'astro-embed/integration';

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import tailwind from '@astrojs/tailwind';


import vercel from '@astrojs/vercel';

export const locales = {
    en: { label: 'English', lang: 'en' },
    fr: { label: 'Français', lang: 'fr' },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    embeds(),
    starlight({
      title: 'Elizabeth Whalley',
         // Set English as the default language for this site.
         defaultLocale: 'en',
         locales,
      social: [
        {
          icon: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/elizabethwhalleyprojects/',
        },
      ],
      plugins: [starlightImageZoom()],
      customCss: [
          // Relative path to your custom CSS file
          './src/styles/custom.css',
        ],
      sidebar: [
          {
              label: 'Projects',
              translations: {
                  fr: 'Projets',
              },
              autogenerate: { directory: 'projects' },
          },
          {
              label: 'Writing',
              translations: {
                  fr: 'Textes',
              },
              autogenerate: { directory: 'writing' },
          },
      ],
      }), tailwind()],

  output: 'server',
  adapter: vercel(),
  redirects: {
    '/': '/en'
  }
});
