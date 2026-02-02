import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Tambahkan base URL sesuai nama repositori GitHub Anda
  base: "/absensi-inspektorat/",
})