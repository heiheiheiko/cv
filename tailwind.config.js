const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
        indigo: colors.indigo,
        purple: colors.purple,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
