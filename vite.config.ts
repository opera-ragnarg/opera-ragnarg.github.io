import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from 'path'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()
],
  base: process.env.NODE_ENV === 'production' ? '/game-maker-prefab-designer/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})