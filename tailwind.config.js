/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',
        "small-body": ".500rem"
      }
    },
  },
  plugins: [],
}