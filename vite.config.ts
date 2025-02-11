import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: { find: "@", replacement: resolve(__dirname, "src") },
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
});