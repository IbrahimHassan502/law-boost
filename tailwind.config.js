/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/js/*.{html,js}",
    "./index.html",
    "./public/js/main-script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["Manrope", "sans-serif"],
        "heading-font": ["Gilroy", "sans-serif"],
      },
      colors: {
        "yellow-color": "#fcec52",
        "navy-color": "#2d3b77",
        "light-purple": "#b6bddc",
        "light-blue": "#6c87b3",
        "dark-orange-color": "#bd7b39",
        "dark-grey-color": "#2d2f33",
      },
      gridTemplateColumns: {
        "reponsive-6": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
