/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
  },
  daisyUi: {
    themes: ['light', 'night'],
  },
  plugins: [require('daisyui')],
}
