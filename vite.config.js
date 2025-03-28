import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // If you need to add global Sass variables or imports
        // additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
})
