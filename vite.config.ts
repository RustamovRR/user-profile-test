import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./"),
      "@src": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@assets": path.resolve("./src/assets"),
      "@constants": path.resolve("./src/constants"),
      "@api": path.resolve("./src/api"),
      "@types": path.resolve("./src/types"),
      "@utils": path.resolve("./src/utils"),
      "@hooks": path.resolve("./src/hooks"),
    },
  },
});
