import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: ['assets.example.com'],
    remotePatterns: [{ protocol: "https" }],
    serviceEntryPoint: '@astrojs/image/sharp',
    cacheDir: './.cache/image',
    defaultQuality: 85,
    format: ['webp', 'avif'],
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/critical.css";`,
        },
      },
    },
    optimizeDeps: {
      include: ['@astrojs/image'],
    },
  },
});