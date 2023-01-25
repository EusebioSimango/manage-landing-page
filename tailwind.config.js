/** @type {import('tailwindcss').Config} */
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
          300: '#f25f3a',
          400: '#ffefeb',
        },
        Gray: {
          300: '#fafafa',
        }
      }
    },
  },
  plugins: [],
}
