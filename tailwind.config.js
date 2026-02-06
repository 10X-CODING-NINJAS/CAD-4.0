import tailwindcssTextshadow from 'tailwindcss-textshadow';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gegola': ['Gegola_DEMO', 'sans-serif'],
        'kumbh': ['Kumbh Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      textShadow: {
        'glow': '0px 0px 30px #91ce00',
      },
    },
  },
  plugins: [
    tailwindcssTextshadow,
  ],
}
