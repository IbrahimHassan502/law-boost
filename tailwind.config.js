/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/js/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["Manrope", "sans-serif"],
        "heading-font": ["Gilroy", "sans-serif"],
      },
      colors: {
        "yellow-color": "#fcec52",
      },
    },
  },
  plugins: [],
};
