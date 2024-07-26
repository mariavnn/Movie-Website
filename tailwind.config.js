/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        terciary: 'var(--terciary-color)',
        quaternary: 'var(--quaternary-color)',
      }
    },
  },
  plugins: [],
}

