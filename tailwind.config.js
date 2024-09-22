/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        nav: "#777777",
        navs: "#232323",
        hero: "#EFEFEF",
        para: "#333333",
        text: "#C5C5C5",
        bloom: "#EBEBEB",
        beauty: "#1E370E",
        news: "#CACBCF",
      },
      fontFamily: {
        rate: ["Montserrat", "sans-serif"],
        abhaya: ["Abhaya Libre", "serif"],
      },
      backgroundImage: {
        new: "url('../src/assets/newsletter.jpg')",
        review: "url('../src/assets/review.svg')",
      },
    },
  },
  plugins: [],
};
