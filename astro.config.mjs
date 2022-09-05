import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import remarkMath from 'remark-math';
import rehypeKaTex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://fizzyelt.github.io',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKaTex],
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
