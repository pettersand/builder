import { spawn } from "child_process";
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import servePlugin from "rollup-plugin-serve";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import sveltePreprocess from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssConfig from "./postcss.config.cjs";
import dotenv from "dotenv";

const production = !process.env.ROLLUP_WATCH;
console.log("Is this production?", production);
dotenv.config();

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      preventAssignment: true,
      process: JSON.stringify({
        env: {},
      }),
    }),
    postcss({
      extract: "postcss.css",
      minimize: production,
      sourceMap: !production,
      extensions: [".postcss", ".css"],
      plugins: [tailwindcss, autoprefixer],
    }),
    svelte({
      preprocess: sveltePreprocess({
        postcss: postcssConfig.plugins,
        sourceMap: !production,
      }),
      compilerOptions: {
        dev: !production,
      },
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ["svelte"],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    !production &&
      servePlugin({
        open: true,
        contentBase: "public",
        host: "localhost",
        port: 5000,
      }),
    !production && livereload("public"),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
