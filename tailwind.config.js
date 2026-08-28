/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F1117',
        surface: {
          DEFAULT: '#171A21',
          hover: '#1E222D'
        },
        primary: '#8B5CF6',
        'primary-hover': '#7C3AED',
        border: '#272A33',
        text: {
          main: '#FFFFFF',
          muted: '#A1A1AA'
        }
      }
    },
  },
  plugins: [],
}
