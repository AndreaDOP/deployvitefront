/** @type {import('tailwindcss').Config} */
purge: [
  './componenetes/**/*.html',
]
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
       DynaPuff: ['DynaPuff', 'cursive'],
      },
    },
  },
  plugins: [],
}