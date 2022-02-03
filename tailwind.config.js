const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        "page-ios-light": "#fff",
        primary: {
          light: "#ff5676",
          DEFAULT: "#ff2d55",
          dark: "#ff0434",
        },
      },
    },
  },
  plugins: [],
});
