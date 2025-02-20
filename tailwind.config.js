/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'portfolio.html', 'about.html'],
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
        primary: '#5a189a',
        secondary: '#f0fff1',
        dark: '#facb2e',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}