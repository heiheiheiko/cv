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
        // can you feel the love tonight
        royalBlue: '#4568dc',
        wisteria: '#b06ab3',
        // bloody mary
        outrageousOrange: '#ff512f',
        ceriseRed: '#dd2476',
        // socialive
        robinsEggBlue: '#06beb6',
        pelorous: '#48b1bf',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
