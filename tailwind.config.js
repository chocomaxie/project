/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bfpRed: "#C1121F",
        bfpGold: "#F4C430",
        bfpBlue: "#0B3C5D",
        bfpDark: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
