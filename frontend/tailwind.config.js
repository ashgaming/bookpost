/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#EB81A3', // Define your custom color
        hoverOrange: '#FCD779', // Define your custom color
        navPink: '#EE5081', // Define your custom color
      },
    },
  },
  plugins: [],
}

