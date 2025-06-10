/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(207, 26%, 17%)", // fondo oscuro general
        darkElement: "hsl(209, 23%, 22%)", // header, tarjetas
        lightText: "hsl(200, 15%, 8%)",
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
