import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pninfosysbackend.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
// proxy: {
//   "/api": {
//     target: "http://localhost:4700",
//     changeOrigin: true,
//   },
