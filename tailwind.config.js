/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        sliderBase: "#D9D9D9",
        darkMode: "#28282C",
        darkText: "#909090",
        lightText: "#FFFFFF",
        lightDaysContainer: "#28282C11", // 11 -> 11% opactiy
        remainingDay: "#B1AEAE",
        passedDay: "#A70610",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
