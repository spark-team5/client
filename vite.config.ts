import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, "src") }, // ✅ 기존 alias 수정
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  assetsInclude: ["**/*.ttf", "**/*.otf"], // ✅ 폰트 파일을 Vite 번들에 포함
});
