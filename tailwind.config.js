/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.{html,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
        '3/4': '3/4',
      },
      spacing: {
        container: `max(1rem, calc((100vw - calc(1600px - 1rem * 2 ))/2))`,
        smcontainer: `max(1rem, calc((100vw - calc(1024px - 1rem * 2 ))/2))`,
      },
    },
  },
  plugins: [],
};
