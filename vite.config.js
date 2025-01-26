import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "nanoid"],
      output: {
        format: ["es", "cjs", "umd"],
        globals: {
          react: "React"
        }
      }
    },
    outDir: "dist",
    cssCodeSplit: false,
    lib: {
      entry: "./index.ts",
      formats: ["es", "cjs", "umd"],
      name: "client-tools",
      cssFileName: "style",
      fileName: (format) => `index.${format}.js`,
    },
  },
  publicDir: "public",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".svg"],
  },
  plugins: [
    dts({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    }),
    svgr(),
    react(),
    tsconfigPaths()
  ],
});
