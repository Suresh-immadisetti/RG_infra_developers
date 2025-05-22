/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#B3A180',
        'primary-blue': '#1B2D37',
        'light-gold': '#c5b699',
        'dark-gold': '#9a8966',
        'light-blue': '#2d4655',
        'dark-blue': '#132028',
        'off-white': '#F9F9F7',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(27, 45, 55, 0.8), rgba(27, 45, 55, 0.6)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')",
        'cta-pattern': "linear-gradient(to right, rgba(27, 45, 55, 0.9), rgba(27, 45, 55, 0.8)), url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};