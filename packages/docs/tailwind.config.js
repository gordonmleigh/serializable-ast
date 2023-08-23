const { join, dirname } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    join(
      dirname(require.resolve('@gordonmleigh/superdocs/tailwind')),
      'components/*.{js,ts,jsx,tsx,mdx}',
    ),
  ],
  theme: {
    extend: {
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      typography: require('./typography.js'),
    },
  },
  plugins: [
    require('@gordonmleigh/superdocs/tailwind'),
    require('@tailwindcss/typography'),

    plugin(function ({ addVariant }) {
      addVariant('nav-item', ['& > li', '& > li > ul > li']);
      addVariant('nav-link', ['& > li > a', ' & > li > ul > li > a']);
      addVariant('nav-submenu', '& > li > ul');
    }),
  ],
};
