/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#438CAA', // Define your custom color
        hoverOrange: '#FCD779', // Define your custom color
        navPink: '#438CAA', // Define your custom color
        webb:'#a8c5d4'
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        serif: ['Lora', 'serif'],
      },

    },
  },
  plugins: [],
}

