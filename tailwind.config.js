module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      grey: "#000000ff",
      primary: "#ff6700",
      lightGrey: "#888888",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkGrey: "#000000ff",
      grey: "#000000ff",
      primary: "#ff6700",
      lightGrey: "#888888",
    }),
    extend: {
      height: {
        sidebar: "90vh",
        header: "10vh",
      },
      textColor: {
        grey: "#000000ff",
        darkGrey: "#000000ff",
        primary: "#ff6700",
        lightGrey: "#888888",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
