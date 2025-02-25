import { defineConfig } from 'vite'
import lightningcss from "vite-plugin-lightningcss"
// https://vite.dev/config/

export default defineConfig({
  plugins: [
      lightningcss({
        browserslist: 'last 3 versions',
        minify: true
      })     
  ],
  css: {
    transformer: 'lightningcss'
  },
  build: {
    cssMinify: 'lightningcss',
    minify: true,
    rollupOptions: {
      input: ['index.html']
    },
    terserOptions: {
      format: {
        comments: false
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
