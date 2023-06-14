/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rufina: ["Rufina", "serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        textColor: "#020402",
        whiteColor: "#f9fcf8",
        primaryButton: "#8ecc96",
        secondaryButton: "#edf7f3",
        primaryBackground: "#4ca985",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
