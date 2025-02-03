import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './', // Ensures relative paths for assets in production
  build: {
    outDir: 'dist', // Output directory for build (default is 'dist')
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separates vendor code for better caching
          }
        },
      },
    },
  },
  server: {
    host: true, // Allows external access for local testing
    port: 3000, // Customize your dev server port if needed
  },
});
