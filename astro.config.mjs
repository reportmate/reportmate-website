import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://reportmate.app',
  integrations: [tailwind()],
  output: 'static',
});
