/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'custom':'40rem',
        'custom1':'30rem',
        'custom2':'35rem'
      },
      width:{
        'custom':'55rem'
      }
    },
  },
  plugins: [],
}

