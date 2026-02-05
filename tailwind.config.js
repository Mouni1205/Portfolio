/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        cafe: {
          cream: '#FDF8F3',
          latte: '#F5EDE4',
          sand: '#E8DDD4',
          biscuit: '#D4C4B5',
          roast: '#8B7355',
          espresso: '#5C4A3A',
          brown: '#3E3229',
        },
      },
    },
  },
  plugins: [],
};
