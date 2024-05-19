/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        nav: "#777777",
        navs: "#232323",
        hero: "#F6F4EE",
        para: "#333333",
        text: "#C5C5C5",
      },
      fontFamily: {
        rate: ["Montserrat", "sans-serif"],
        abhaya: ["Abhaya Libre", "serif"],
      },
    },
  },
  plugins: [],
};
