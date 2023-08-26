import sveltePreprocess from 'svelte-preprocess';
import postcssConfig from './postcss.config.cjs';

export default {
  preprocess: sveltePreprocess({
    postcss: postcssConfig,
  }),
};
