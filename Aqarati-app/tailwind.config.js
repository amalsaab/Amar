/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        Meddon: ['"Meddon"', "cursive"],
        Alice: ['"Alice"', "serif"],
        Arabic: ['"Noto Sans Arabic"', "sans-serif"],

        // Add more custom font families as needed
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BBA98D",

          secondary: "#FBEFD1",

          accent: "#DDD1B5",

          neutral: "#F6F6F6",

          "base-100": "#ffffff",

          info: "#00b6ff",

          success: "#4FC180",

          warning: "#F4DD9C",

          error: "#BE6363",
        },
      },
    ],
  },
};
