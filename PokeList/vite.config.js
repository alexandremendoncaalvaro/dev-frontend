import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/*global __dirname*/
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@shared": path.resolve(__dirname, "src/shared"),
            "@core": path.resolve(__dirname, "src/core"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
});
