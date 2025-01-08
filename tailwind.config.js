/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'body': ['Archivo', 'sans-serif'],
    },
    screens: {
      'xsm': '162px',
      'sm': '320px',
      'md': '481px',
      'lg': '768px',
      'xl': '1025px',
      '2xl': '1281px',
    },
  },
  plugins: [],
}

