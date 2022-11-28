/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000"
    },
    fontSize: {
      mammoth: "8rem",
    },
  },
  plugins: [],
  targer: "relaxed",
  prefix: "",
  important: false,
  purage: [],
  separator: ":",
}
