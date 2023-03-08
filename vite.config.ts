import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const serverPort = process.env.PORT || 3001;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@static': path.resolve(__dirname, './static'),
    },
  },
  server: {
    port: serverPort,
    host: true
  },
  preview: {
    port: 8080,
  }
});
