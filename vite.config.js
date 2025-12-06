import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/youtube-memo-player/" : "/",
  build: {
    outDir: "docs",
  },
  plugins: [react()],
}));
