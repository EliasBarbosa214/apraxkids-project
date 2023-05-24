/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}', 
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}