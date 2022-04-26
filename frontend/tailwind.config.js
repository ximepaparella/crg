module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Archivo Narrow", "sans-serif"],
    },
    extend: {
      spacing: {
        xs: "0.5rem",
        s: "1rem",
        m: "2rem",
      },
      borderRadius: {
        xs: "0.5rem",
        s: "1rem",
        m: "2rem",
      },
    },
  },
  plugins: [],
};
