/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ef-bg': '#262626',       // Deep black background
        'ef-card': '#403f3f',     // Slightly lighter for cards
        'ef-text': '#e0e0e0',     // Off-white text
        'ef-muted': '#888888',    // Muted grey
        'ef-accent': '#5da9ec',   // Soft blue/cyan accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
