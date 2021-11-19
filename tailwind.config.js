const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
