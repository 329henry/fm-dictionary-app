import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      onwarn: (warning, handler) => {
        // disable a11y warnings
        if (warning.code.startsWith('a11y-click-events-have-key-events')) return
        handler(warning)
      }
    })
  ],
  resolve: {
    alias: {
      $component: path.resolve(__dirname, './src/lib/component'),
      $page: path.resolve(__dirname, './src/lib/page'),
      $store: path.resolve(__dirname, './src/lib/store'),
      $types: path.resolve(__dirname, './src/lib/types'),
      $util: path.resolve(__dirname, './src/lib/util')
    }
  }
})
