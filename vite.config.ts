import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  resolve: {
    alias: {
      "@": resolve("./"),
      "@src": resolve("./src"),
      "@components": resolve("./src/components"),
      "@pages": resolve("./src/pages"),
      "@assets": resolve("./src/assets"),
      "@constants": resolve("./src/constants"),
      "@api": resolve("./src/api"),
      "@types": resolve("./src/types"),
      "@utils": resolve("./src/utils"),
      "@hooks": resolve("./src/hooks"),
    },
  },
});
