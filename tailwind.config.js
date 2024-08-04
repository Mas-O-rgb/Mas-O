/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('img/Mas-O/GUA4.png')"
      },
      colors: {
        primary: '#7b2cbf',
        dark: '#3d0066',
        secondary: '#ff8500',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

