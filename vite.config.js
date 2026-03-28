import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/city-nooks/',  // Change 'city-nooks' to your GitHub repo name
})
