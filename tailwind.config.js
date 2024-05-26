/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      "colors": {
        "bittersweet": {
          50: "#FEF1F1",
          100: "#FCDEDE",
          200: "#F9BEBE",
          300: "#F69D9D",
          400: "#F37C7C",
          500: "#F05D5E",
          600: "#EA1F1F",
          700: "#B61111",
          800: "#790B0B",
          900: "#3D0606",
          950: "#210303"
        },
        "princeton": {
          50: "#FFF4E5",
          100: "#FFEACC",
          200: "#FFD599",
          300: "#FFC16B",
          400: "#FFAC38",
          500: "#FF9505",
          600: "#D17A00",
          700: "#9E5C00",
          800: "#663C00",
          900: "#331E00",
          950: "#190F00"
        },
        "antiwhite": {
          50: "#FCFDFD",
          100: "#F9FAFB",
          200: "#F6F8F9",
          300: "#F0F3F5",
          400: "#EDF1F3",
          500: "#E7ECEF",
          600: "#AFC0CA",
          700: "#7592A3",
          800: "#4B6371",
          900: "#253037",
          950: "#12181C"
        },
        "raisin": {
          50: "#E8E7EE",
          100: "#D0CFDD",
          200: "#9F9DB9",
          300: "#706D97",
          400: "#4A4865",
          500: "#272635",
          600: "#1F1E2A",
          700: "#181721",
          800: "#0F0F15",
          900: "#09090C",
          950: "#040406"
        },
        "jet": {
          50: "#EAEBEA",
          100: "#D3D4D3",
          200: "#AAACAA",
          300: "#7E817E",
          400: "#535553",
          500: "#2A2B2A",
          600: "#212221",
          700: "#191A19",
          800: "#121212",
          900: "#080808",
          950: "#050505"
        }
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
})

