module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBgColorHSL: "hsl(353 78% 35%)", 
        customBgColorHex: "#fcf2cc", 
        customBgColor: "#fffae6",
      },
    },
  },
  plugins: [],
};
