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
      $components: path.resolve(__dirname, './src/components'),
      $constants: path.resolve(__dirname, './src/constants'),
      $feature: path.resolve(__dirname, './src/feature'),
      $helpers: path.resolve(__dirname, './src/helpers'),
      $routes: path.resolve(__dirname, './src/routes'),
      $types: path.resolve(__dirname, './src/types'),
      $utils: path.resolve(__dirname, './src/utils'),
      $api: path.resolve(__dirname, './src/api')
    }
  }
})
