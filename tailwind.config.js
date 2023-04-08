/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsl(var(--light-cyan))",
        neonGreen: "hsl(var(--neon-green))",
        grayishBlue: "hsl(var(--grayish-blue))",
        darkGrayishBlue: "hsl(var(--dark-grayish-blue))",
        darkBlue: "hsl(var(--dark-blue))",

      },
    },
  },
  plugins: [],
}
