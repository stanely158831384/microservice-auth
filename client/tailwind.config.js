/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
        cyberFonts: ['"Press Start 2P"'],
      },
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        racoonBlueA: 'hsl(168, 100%, 50%)',
        racoonBlueB: 'hsl(170, 57%, 43%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require("flowbite/plugin")],
}
