/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: {
          300: '#9095a7',
          500: '#242d52',
          700: '#1d1e25',
        },
        Red: {
          400: '#ffefeb',
          500: '#f25f3a',
          
        },
        Gray: {
          400: '#fafafa',
        }
      },
      fontFamily: {
        beVietnamPro: ['var(--font-bevietnampro)'],
      }
    },
  },
  plugins: [],
}
