// vite.config.js (Revised)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 1. Keep base path for production deployment
  base: mode === 'production' ? '/nicu-compass-website/' : '/',
  
  // 2. Simplfy server config for development
  server: {
    host: '0.0.0.0', // Optional, only for dev environment access
    port: 5173,     // Optional, only for dev environment access
    // Removed allowedHosts and headers as they are unnecessary/don't affect production
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    // Rollup options are fine, they ensure consistent naming
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
}))