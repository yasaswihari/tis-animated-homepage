/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        cream: "#f4f0e8",
        orange: "#e56b2f",
        forest: "#173c35",
        gold: "#d8a13a"
      },
      boxShadow: {
        soft: "0 25px 80px rgba(0,0,0,.12)"
      }
    }
  },
  plugins: []
};