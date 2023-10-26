/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#266F62",
        primaryGold: "#FF855F",
      },
      boxShadow: {
        small: "0px 3px 8px 0px rgba(0, 0, 0, 0.24);",
      },
    },
  },
  plugins: [],
};
