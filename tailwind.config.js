/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      reckless: ["Reckless Neue", "serif"],
    },
    extend: {
      colors: {
        primary: "#C39F76",
        secondary: "#443829",
        gray: "#6D6D6D",
        "black-rgba": "rgba(58, 58, 58, 0.6)",
        tertiary: "#F2F8FC",
        border: "#E4D4C1",
        
      },
      boxShadow: {
        "3xl":
          "0px 9.40171px 9.40171px -4.70085px rgba(0, 0, 0, 0.04), 0px 18.8034px 23.5043px -4.70085px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}

