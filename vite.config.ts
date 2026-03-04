import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Silence the Dart Sass legacy JS API deprecation warning
        // (emitted by Vite's internal Sass bridge, not our SCSS code)
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
});
