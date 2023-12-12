// / @type {import('tailwindcss').Config} */
export const content = ['./src//*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  fontFamily: {
    sans: ['sans', 'Mulish'],
    serif: ['serif', 'Vollkorn'],
  },
};
export const plugins = [];
export const corePlugins = {
  preflight: false,
};