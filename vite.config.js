import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: path.resolve(`./node_modules/vue`),
      icons: path.relative(__dirname, "node_modules/vue-material-design-icons"),
    },
  },
});
