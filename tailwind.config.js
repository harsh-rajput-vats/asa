/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        sans: [
          "Inter var, sans-serif",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
      extend: {
        colors:{
          "blue-gray-900": "RGB(38 50 56)",
          "white": "RGB(255 255 255)",
          "red":"RGB(220 38 38)",
        },
       },
      colors: {
        primary: {
          900:"#020B50",
          100: "#E6F6FF",
        },
        secondary: {
          900: "#1BB1DC",
          100: "#E6F6FF",
        },
        background:"#F4FDFF"
      },
    },
  },
  plugins: [],
}