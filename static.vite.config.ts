import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-static',
    emptyOutDir: true,
    rollupOptions: { input: resolve(import.meta.dirname, 'static.html') },
  },
  esbuild: { jsx: 'automatic' },
});
