/** @type {import('tailwindcss').Config} */
const daisyuiConfig = require('./daisyui');

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunsetPrimary: "#9A3918",
        lightPrimary: "#FB923C",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: daisyuiConfig,
};
