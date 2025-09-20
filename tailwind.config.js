/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#debe9b',
          50: '#faf8f4',
          100: '#f5f0e8',
          200: '#eae0d1',
          300: '#debe9b',
          400: '#d2b085',
          500: '#c8a26f',
          600: '#ba9562',
          700: '#9b7a52',
          800: '#7e6347',
          900: '#67523b',
        },
        accent: '#debe9b',
      },
    },
  },
  plugins: [],
}