import { defineConfig } from 'vite'
import path from 'node:path'


/**
 * @abstract configures the building of the site
 */
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
