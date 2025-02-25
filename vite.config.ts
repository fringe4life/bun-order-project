import { defineConfig } from 'vite'
//import lightningcss from "vite-plugin-lightningcss"
// https://vite.dev/config/
import path from 'node:path'
export default defineConfig({
  plugins: [ ],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src")
  }
  },
  
  build: {
    cssMinify: 'esbuild',
    minify: true,
    rollupOptions: {
      input: ['./index.html']
    },
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  assetsInclude: ['./src/burger-img.jpeg']
})
