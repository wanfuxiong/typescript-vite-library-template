import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        vue(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx,vue}"',
            },
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
        // 省略后缀
        extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
