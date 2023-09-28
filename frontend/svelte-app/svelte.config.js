import sveltePreprocess from "svelte-preprocess";
import postcssConfig from "./postcss.config.cjs";

const config = {
  preprocess: sveltePreprocess({
    postcss: postcssConfig.plugins,
  }),
};

export default config;
