/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
