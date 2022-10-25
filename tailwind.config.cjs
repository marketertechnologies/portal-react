/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#004afe',
        'secondary': '#f4f4f4',
        'tertiary': '#f9f3f3',
        'white': '#fff',
        'black': '#000'
      }
    },
  },
  plugins: [],
};
