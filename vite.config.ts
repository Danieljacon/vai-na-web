import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/utilities/_variables.scss"; @import "./src/styles/utilities/_mixins.scss";`,
      },
    },
  },
});
