/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'jejak_visual.html', 'about.html', 'contact.html', '404.html', './header_footer/footer.html', './header_footer/header.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'blink': 'blink 2s linear infinite',
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

  plugins: [
    "@tailwindcss/postcss",
  ],
}