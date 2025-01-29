import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ou '/' dependendo do seu caso
  server: {
    historyApiFallback: true
  }
});