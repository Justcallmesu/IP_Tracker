import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rubik:[ "Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config

