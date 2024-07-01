/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090e17",
        mainBlue: "#2ca4fb",
        secondary: "#303c4f",
      },
    },
  },
  plugins: [],
};
