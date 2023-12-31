/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E74C1B',
        textColor: {
          DEFAULT: '#A1A1A1',
        },
        bg: '#F0F4FC'
      }
    },
  },
  plugins: [],
}
