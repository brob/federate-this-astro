import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import starlight from "@astrojs/starlight";
import { loadEnv } from "vite";

import react from "@astrojs/react";


// astro.config.mjs
  process.env.NODE_DEBUG = false;

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  vite: {
    build: {
      rollupOptions: {
        external: ['@components/Env.astro']
      }
    }
  },
  adapter: vercel({
    functionPerRoute: false
  }),
  integrations: [tailwind(), starlight({
    title: 'Federate This',
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    tableOfContents: {
      maxHeadingLevel: 4
    },
    social: {
      github: 'https://github.com/hygraph',
      twitter: 'https://twitter.com/hygraph'
    },
    sidebar: [{
      label: 'Routes',
      autogenerate: {
        directory: 'routes',
        collapsed: true
      }
    }, {
      label: 'Guides',
      collapsed: true,
      autogenerate: {
        directory: 'guides'
      }
    }]
  }), react()]
});