/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '18px': '18px',
        '120px': '120px'
      },
      colors: {
        'colorText': '#ADA8C3',
        'darkBlue':"#351E99"
      },
      inset:{
        '5px':'5px',
        '6px':'6px'
      },
      backgroundImage: {
        'signIn-bg': "url('/public/images/landing-page/signin-bg.svg')",
      },
      fontFamily: {
        'sora': ["Sora", 'sans-serif'],
        'source': ["Source Code Pro", 'monospace'],
        'inter': ["Inter", 'sans-serif'],
        'space':["Space Grotesk", 'sans-serif']
      },
    },
  },
  plugins: [],
}

