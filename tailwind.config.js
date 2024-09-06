/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md1: '990px',
        md2: '575px',
        md3: '770px',
        md4: '990px',
        md5: '1200px'
      }
    },
  },
  plugins: [],
}