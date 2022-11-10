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
      }, 
      boxShadow: {
        'input': '0 0 0 0.25rem rgb(13 110 253 / 25%)'
      }
    },
  },
  plugins: [],
}
