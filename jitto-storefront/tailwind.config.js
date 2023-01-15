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
      'blue': '#2b78c6',
      'dark-gray': '#343538',
      'button-shadow': '#3d3e42',
      'gray': '#e8e8e8',
      'slate-gray': '#9ca3af',
      'light-gray': '#f6f7f8',
    },
    
    extend: {
        scrollbarThumb: (theme) => ({
          'jitto': '#763f98'
        }),
    },
  },
  variants: {},
  plugins: [],
}
