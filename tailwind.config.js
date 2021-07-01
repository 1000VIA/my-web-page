const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      height: {
      footer:'100px'
     },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
