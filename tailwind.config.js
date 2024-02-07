/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{html,jsx,js,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
        rmarquee: 'rmarquee 10s linear infinite',
        rmarquee2: 'rmarquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        rmarquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rmarquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

