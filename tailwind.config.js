/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkRed: 'hsl(0, 14%, 5%)',
        deepRed: 'hsl(0, 81%, 24%)',
        richRed: 'hsl(0, 94%, 18%)',
        softGray: 'hsl(0, 1%, 44%)',
        warmGray: 'hsl(0, 1%, 38%)',
      },
      fontFamily: {
        hankenGrotesk: ['"Hanken Grotesk"', 'system-ui'],
        roboto: ['"Roboto"', 'system-ui'],
        rubik: ['"Rubik"', 'system-ui'],
      },
    },
  },
  plugins: [],
}
