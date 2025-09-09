import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows external access
    port: 3000, // or your app port
    allowedHosts: 'all', // allow all hosts (including ngrok)
  }
});
