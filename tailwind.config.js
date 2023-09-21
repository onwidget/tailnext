const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
        'umass-red': '#881c1c',
        'umass-black': '#212721',
        'umass-neutral': {
          light: '#a2aaad',
          DEFAULT: '#505759',
          dark: '#373a36'
        }
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        serif: ['var(--font-secondary)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
