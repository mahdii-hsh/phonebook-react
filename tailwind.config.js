/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
}

// module.exports = {
// 	// ... the rest of your config
// 	plugins: [require("rippleui")],
// }