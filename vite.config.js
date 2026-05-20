import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  root: 'src',
  publicDir: '../public',
  base: mode === 'production' ? process.env.VITE_BASE_PATH || '/EMS-Consultoria/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
}));
