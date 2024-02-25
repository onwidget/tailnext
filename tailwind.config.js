const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const artUrl = 'https://images.pexels.com/photos/1570779/pexels-photo-1570779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const codeUrl = 'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
// const homeUrl = 'https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const homeUrl = 'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'code': `url(${codeUrl})`,
        'art': `url(${artUrl})`,
        'home': `url(${homeUrl})`,
      },
      backgroundOpacity: {
        '25' : '0.2',
        '50' : '0.5',
      },
      backgroundOpacity: ['active'],
      colors: {
        primary: colors.cyan,
        secondary: colors.cyan,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
