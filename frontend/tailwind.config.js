module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sidebar: "93vh",
        header: "7vh",
      },
      textColor: {
        grey: "#8b8b81",
        darkGrey: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
