import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [dts()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
        extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    build: {
        minify: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/index.ts"),
            name: "",
            // the proper extensions will be added
            fileName: "index",
            formats: ["es"],
        },
    },
    assetsInclude: ["**/*.glsl"],
});
