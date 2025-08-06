import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Redireciona requisições de /api para o servidor backend
      '/api': {
        target: 'http://localhost:3001', // A URL do seu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});