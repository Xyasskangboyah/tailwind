/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow':"spin 3s linear Infinite",
        "abudzar": "bergerak 1s ease-in-out infinite"
      },
      keyframes :{
        bergerak:{
          "0% - 100%" : { transform: "rotate(3deg)"},
          "50%": { transform: "rotate(-3deg)"},
        },
      },
      colors: {
        mouse: "#d4a373",
        Keyboard: {
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        }
      }
    
    },
  },
  plugins: [],
}


