/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{css,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#1e1b4b',
        }
      }
    },
  },
  plugins: [],
}
