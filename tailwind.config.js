/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode : 'class',
  theme: {
    extend: {
      colors:{
        'custom-blue':'#C9E6F0',
      }
    },
  },
  plugins: [],
}

