/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#EC9027', // Define your custom color
        hoverOrange: '#FCD779', // Define your custom color
      },
    },
  },
  plugins: [],
}

