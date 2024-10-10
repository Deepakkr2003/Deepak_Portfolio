/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
      },
      colors: {
        'parrot-green': '#3CB043',
        'custom-dark': '#242424',
        'custom-bg': '#0e0f1a',
        'custom-s1':'#130c24',
        'custom-s2':'#251e35',
      },
    },
    fontFamily:{
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

