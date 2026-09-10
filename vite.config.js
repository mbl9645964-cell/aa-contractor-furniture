import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project page lives at /aa-contractor-furniture/ on GitHub Pages.
  base: command === 'build' ? '/aa-contractor-furniture/' : '/',
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
  },
}))
