// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://santanahq.github.io",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), mdx(), icon()],
});
