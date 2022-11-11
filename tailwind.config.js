/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      }, 
      colors: {
        primary: '#045e73', 
      }, 
      backgroundImage: {
        'home-image': "url('./assets/HeaderImage.png')", 
        'home-gradient': 'linear-gradient(144deg, hsl(85, 40%, 51%) 0%, #27aae1 100%)', 
        'menu-btn': "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)"
      }, 
      boxShadow: {
        'input': '0 0 0 0.25rem rgb(13 110 253 / 25%)'
      }
    },
  },
  plugins: [],
}
