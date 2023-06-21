/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'stone-bg': "url('/src/media/stones.jpg')",
        'metal-stone': "url('/src/media/metal-stones.jpg')",
        'fight': "url('/src/media/fight.jpeg')",
      }
    },
  },
  plugins: [],
}

