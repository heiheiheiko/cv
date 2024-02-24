const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem'
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
        indigo: colors.indigo,
        purple: colors.purple,
        // blue gradient
        royalBlue: '#4568dc',
        affair: '#7b4397',
        // red gradient
        outrageousOrange: '#ff512f',
        lipstick: '#aa076b',
        // green gradient
        mountainMeadow: '#14b8a6',
        bondiBlue: '#0891b2',
        // orange gradient
        macaroniAndCheese: '#ffc371',
        bittersweet: '#ff7e5f'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
