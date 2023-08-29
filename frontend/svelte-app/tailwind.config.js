/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'muli': ['Muli', 'sans-serif']
      },
      colors: {
        // Dark Mode
        'dark-bg': 'rgb(1, 5, 12)',
        'dark-bg2': 'rgb(23, 39, 62)',
        'dark-header-footer': 'rgb(10, 19, 31)',
        'dark-text': 'rgb(210, 168, 80)',
        'dark-card': 'rgb(12, 21, 34)',
        'dark-primary': 'rgb(20, 78, 108)',
        'dark-primary2': 'rgb(18, 70, 97)',
        'dark-primary3': 'rgb(91, 131, 152)',
        
        // Light Mode
        'light-bg': 'rgb(114, 166, 213)',
        'light-bg2': 'rgb(165, 209, 245)',
        'light-bg3': 'rgb(204, 203, 225)',
        'light-header-footer': 'rgb(15, 59, 81)',
        'light-text': 'rgb(4, 11, 22)',
        'light-card': 'rgb(85, 125, 169)',
        'light-card2': 'rgb(112, 153, 194)',
        'light-primary': 'rgb(20, 78, 108)',
        'light-primary2': 'rgb(18, 70, 97)',
        'light-primary3': 'rgb(91, 131, 152)',

        // Additional Colors
        'secondary-500': 'rgb(209, 203, 184)',
        'tertiary-500': 'rgb(202, 164, 93)',
        'success-500': 'rgb(15, 102, 76)',
        'warning-500': 'rgb(212, 127, 0)',
        'error-500': 'rgb(139, 0, 0)',
        'surface-500': 'rgb(0, 31, 63)',
      },
    },
  },
  plugins: [],
};