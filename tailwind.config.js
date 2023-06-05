/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edeec9",
        white: "#ffffff",
        black: "#000000",
        green: {
          500: "#77bfa3",
          400: "#98c9a3",
          300: "#bfd8bd",
          200: "#dde7c7",
        },
      },
    },
  },
  plugins: [],
};
