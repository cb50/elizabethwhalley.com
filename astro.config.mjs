// @ts-check

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

import vercel from '@astrojs/vercel';

export const locales = {
    en: { label: 'English', lang: 'en' },
    fr: { label: 'Français', lang: 'fr' },
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: unified(),
  },
  integrations: [
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
      components: {
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
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
              items: [{ autogenerate: { directory: 'projects' } }],
          },
          {
              label: 'Writing',
              translations: {
                  fr: 'Textes',
              },
              items: [{ autogenerate: { directory: 'writing' } }],
          },
      ],
      }),
  ],

  output: 'server',
  adapter: vercel(),
  redirects: {
    '/': '/en'
  }
});
