import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    "meta.env": meta.env,
    VITE_APIKEY: meta.env.VITE_APIKEY,
  }
})
