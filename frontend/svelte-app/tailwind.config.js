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
        'dark-bg': 'rgb(0, 15, 31)',
        'dark-header-footer': 'rgb(0, 19, 38)',
        'dark-text': 'rgb(202, 164, 93)',
        'dark-primary': 'rgb(20, 78, 108)',
        'dark-primary2': 'rgb(18, 70, 97)',
        'dark-primary3': 'rgb(91, 131, 152)',
        
        // Light Mode
        'light-bg': 'rgb(191, 199, 207)',
        'light-header-footer': 'rgb(15, 59, 81)',
        'light-text': 'rgb(0, 15, 31)',
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