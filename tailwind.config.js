/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('img/Mas-O/GUA4.png')"
      },
      colors: {
        primary: '#0353a4',
        dark: '#ffafcc',
        secondary: '#0353a4',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

