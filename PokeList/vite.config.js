import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    overrideConfig: {
      rules: {
        "react/prop-types": "off"
      }
    }
  })],
  server: {
    port: 3000 
  }
})
