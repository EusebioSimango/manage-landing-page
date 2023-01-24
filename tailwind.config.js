/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        _blue: {
          300: 'hsl(228, 39%, 23%)',
          500: 'hsl(227, 12%, 61%)',
          700: 'hsl(233, 12%, 13%)',
        },
        _red: {
          300: 'hsl(12, 88%, 59%)',
          400: 'hsl(13, 100%, 96%)',
        },
        _gray: {
          300: 'hsl(0, 0%, 98%)',
        }
      }
    },
  },
  plugins: [],
}
