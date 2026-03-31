// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://axisbbg11-source.github.io',
  base: '/tech-pulse',
  output: 'static',
  build: {
    format: 'file'
  }
});
