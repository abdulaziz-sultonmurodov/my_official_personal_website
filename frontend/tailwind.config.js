module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      grey: "#8b8b81",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkGrey: "#333333",
      grey: "#8b8b81",
    }),
    extend: {
      height: {
        sidebar: "90vh",
        header: "10vh",
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
