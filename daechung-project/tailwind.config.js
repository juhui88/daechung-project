/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPoint: "#E2E9F1",
        textPoint: "#4978AE",
        itemBg : "#F5F5F5"
      }
    },
  },
  plugins: [],
};