const sveltePreprocess = require("svelte-preprocess");
const postcssConfig = require("./postcss.config.cjs");

module.exports = {
  preprocess: sveltePreprocess({
    postcss: postcssConfig.plugins,
  }),
};
