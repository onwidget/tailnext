const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const aboutUrl =
  'https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const artUrl =
  'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const codeUrl =
  'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const homeUrl =
  'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        code: `url(${codeUrl})`,
        art: `url(${artUrl})`,
        home: `url(${homeUrl})`,
        about: `url(${aboutUrl})`,
      },
      backgroundOpacity: {
        25: '0.2',
        50: '0.5',
      },
      backgroundOpacity: ['active'],
      colors: {
        primary: colors.stone,
        secondary: colors.stone,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
