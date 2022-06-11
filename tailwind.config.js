module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bigpost: "url('../public/img/bigpost.png')",
      },
      backgroundSize: {
        '16': '37rem',
      },
      colors: {
        'footer-color': '#212529',
        'background-color2': '#343A40',
        'nav-underline':'#D4A373',

      },
    },
  },
  plugins: [],
};
