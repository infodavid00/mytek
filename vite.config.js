import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import proxy from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://bbp.api.rentmanager.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
});
