import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    functionPerRoute: false,
  }),

  integrations: [
    tailwind(),
    starlight({
      title: "Federate This",

      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],

      tableOfContents: {
        maxHeadingLevel: 4,
      },
      social: {
        github: "https://github.com/hygraph",
        twitter: "https://twitter.com/hygraph",
      },
      sidebar: [
        {
          label: "Routes",
          autogenerate: { directory: "routes", collapsed: true },
        },
        {
          label: "Guides",
          collapsed: true,
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
