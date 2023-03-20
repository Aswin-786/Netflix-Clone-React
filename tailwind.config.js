/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Airbnb/**/*.{js,jsx,ts,tsx}"

  ],
  theme: {
    extend: {
      width: {
        100: '400px',
        150: '600px',
        200: '900px'
      },
      height: {
        150: '600px',
        200: '900px'
      },
      screens: {
        xs:'300px'
      }
    
    },

  },
  plugins: [],
}

