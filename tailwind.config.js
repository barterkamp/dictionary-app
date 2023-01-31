/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      lora: "'Lora', serif",
      inconsolata: "'Inconsolata', monospace",
    },
    fontSize: {
      s: ['14px', {lineHeight: '17px'}],
      m: ['18px', {lineHeight: '24px'}],
      l: ['20px', {lineHeight: '24px'}],
      xl:['24px', {lineHeight: '29px'}],
      '2xl' : ['64px', {lineHeight: '77px'}],
    },
    extend: {
      colors: {
        primary: '#A445ED',
        error: '#FF5252',
        darkmode: {
          '100': '#3A3A3A',
          '200': '#2D2D2D',
          '300': '#1F1F1F',
          '400': '#050505',
        },
        lightgray: {
          '100': '#F4F4F4',
          '200': '#3A3A3A',
          '400': '#838383',
        }
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '740px',
          },
          '@screen xl': {
            maxWidth: '740px',
          },
          '@screen 2xl': {
            maxWidth: '740px',
          },
        }
      })
    }
  ],
}
