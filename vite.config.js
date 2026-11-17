import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Keep Create React App's variable names (REACT_APP_*), read via import.meta.env
  envPrefix: 'REACT_APP_',
  server: {
    // Same port as Create React App, which is the origin venture_backend was developed against
    port: 3000,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
