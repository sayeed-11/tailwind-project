/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        'my-shadow' : ['10px 10px 10px rgba(0,0,0,0.05)','-10px -10px 10px rgba(255,255,255,0.3)'],
      }
    },
  },
  plugins: [],
  darkMode:'class'
}