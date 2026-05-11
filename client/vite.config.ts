import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "vite-plugin-sitemap";

import { routes } from "./src/googleroutes";

export default defineConfig(({ mode }) => {
  // Load env file based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemap({
      hostname: "https://hgmiafrica.org",
      dynamicRoutes: routes,
    }),
    ],
    server: {
      port: Number(env.VITE_PORT) || 5173, // default port if VITE_PORT not set
    },
  }
})