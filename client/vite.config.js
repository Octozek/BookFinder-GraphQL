import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' ? 'https://bookfinder-graphql.onrender.com/' : 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
