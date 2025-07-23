import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Taskster",
        short_name: "ToDo App",
        description: "Track your daily routine",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/sun-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/sun-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/sun-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})

