import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  root: '.',  // Ensure Vite starts from the project root
  build: {
    outDir: 'dist',  // Output directory for Netlify
    emptyOutDir: true,  // Clears the old build before a new one
    rollupOptions: {
      input: {
        main: './index.html',  // Explicitly specify the entry point
      },
    },
  }
});
