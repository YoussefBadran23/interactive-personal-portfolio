import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
  base: '/interactive-personal-portfolio/',
  define: {
    // Gemini API key removed
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
