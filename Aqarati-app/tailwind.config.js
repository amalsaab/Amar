/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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

          success: "#009b44",

          warning: "#ffcd41",

          error: "#BE6363",
        },
      },
    ],
  },
};
