const { spawn } = require("child_process");
const svelte = require("rollup-plugin-svelte");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");
const resolve = require("@rollup/plugin-node-resolve");
const livereload = require("rollup-plugin-livereload");
const typescript = require("@rollup/plugin-typescript");
const sveltePreprocess = require("svelte-preprocess");
const postcss = require("rollup-plugin-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssConfig = require("./postcss.config.cjs");

const production = !process.env.ROLLUP_WATCH;
console.log("Is this production?", production);

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

module.exports = {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
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
    !production && serve(),
    !production && livereload("public"),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
