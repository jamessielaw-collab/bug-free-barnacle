/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'dancing': ['var(--font-dancing)', 'cursive'],
        'made-mirage': ['MADE Mirage', 'serif'],
        'love': ['Love', 'serif'],
      },
    },
  },
  plugins: [],
}