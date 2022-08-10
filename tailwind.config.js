module.exports = {
  purge: [],
  theme: {
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
      "1/20": "5%",
    },
    fontFamily: {
      heading: ["Public Sans", "sans-serif"],
      body: ["Muli", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#1F1F1F",
        heading: "#1A202C",
        body: "#2D3748",
        yellow: {
          "100": "#FFF8E7",
          "300": "#FFE29D",
          "500": "#FFCF5C",
        },
        gray: {
          "900": "#1A202C",
          "500": "#3E4139",
          "200": "#E7E7E7",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
