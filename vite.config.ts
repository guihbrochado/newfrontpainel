import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4173,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: true,
  },
  preview: {
    host: '0.0.0.0',  // Permite acesso externo
    port: 4173,
    allowedHosts: [
      'webapp397893.ip-45-33-113-78.cloudezapp.io',  // Adiciona o domínio ao Vite Preview
      'localhost',
      '127.0.0.1'
    ],
  }
})
