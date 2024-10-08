import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL || 'http://localhost:5000', // Proxy API requests
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
