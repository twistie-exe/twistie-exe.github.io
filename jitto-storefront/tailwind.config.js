/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'jitto': '#763f98',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#9ca3af',
    },
    extend: {
      backgroundImage: {
        'magnifying-glass': "url('/magnifying-glass.svg')",
      },
    },
  },
  plugins: [],
}
