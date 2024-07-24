import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";

import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), markdoc(), icon(), react()],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [
      svgr()
    ]
  }
});
