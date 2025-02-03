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
  base: '/', // Ensures relative paths for assets in production
  build: {
    outDir: 'dist', // Ensure the output directory aligns with your Netlify settings
    rollupOptions: {
      external: [],
    },
    commonjsOptions: {
      include: [/node_modules/], // Ensure CommonJS dependencies like Vue are bundled
    },
  },
});
