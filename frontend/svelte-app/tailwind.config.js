/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'muli': ['Muli', 'sans-serif']
      },
      colors: {
        'surface': {
          '50': 'rgb(217, 221, 226)',
          '100': 'rgb(204, 210, 217)',
          '200': 'rgb(191, 199, 207)',
          '300': 'rgb(153, 165, 178)',
          '400': 'rgb(77, 98, 121)',
          '500': 'rgb(0, 31, 63)',
          '600': 'rgb(0, 28, 57)',
          '700': 'rgb(0, 23, 47)',
          '800': 'rgb(0, 19, 38)',
          '900': 'rgb(0, 15, 31)',
        },
        'primary': {
          '300': 'rgb(161, 184, 196)',
          '400': 'rgb(91, 131, 152)',
          '500': 'rgb(20, 78, 108)',
          '600': 'rgb(18, 70, 97)',
          '700': 'rgb(15, 59, 81)',
        },
        'secondary': {
          '500': 'rgb(209, 203, 184)',
        },
        'tertiary': {
          '500': 'rgb(202, 164, 93)',
        },
        'success': {
          '500': 'rgb(15, 102, 76)',
        },
        'warning': {
          '500': 'rgb(212, 127, 0)',
        },
        'error': {
          '500': 'rgb(139, 0, 0)',
        },
      },
    },
  },
  plugins: [],
};