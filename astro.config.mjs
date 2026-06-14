import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],

  site: 'https://Firas-Faisal.github.io',

  base: '/Firas-Faisal.github.io/'
});