/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      base: {
        100: "#EAEAEA",
        500: "#4C525C",
        700: "#27292B",
        900: "#161616",
      },
      accent: {
        300: "#f59574",
        400: "#f48762",
        500: "#F37A51",
        600: "#db6e49",
        700: "#c26241",
      },
    },
    extend: {},
  },
  plugins: [],
};
