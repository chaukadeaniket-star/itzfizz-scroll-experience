import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages repository path
  base: "/itzfizz-scroll-experience/",

  plugins: [
    react(),
  ],
});