import { defineConfig } from 'vite'
//import lightningcss from "vite-plugin-lightningcss"
// https://vite.dev/config/

export default defineConfig({
  plugins: [ ],
  
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
