/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#004afe',
        'secondary': '#eee',
        'white': '#fff',
        'black': '#000'
      }
    },
  },
  plugins: [],
};
