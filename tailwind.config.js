/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        desaturatedred: 'hsl(0, 36%, 70%)',
        softred: 'hsl(0, 93%, 68%)',
        darkgrayishred: 'hsl(0, 6%, 24%)'
      }
    },
  },
  plugins: [],
}
