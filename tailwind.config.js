/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'imcc-navy': '#001f4d',
        'imcc-sky': '#0ea5e9',
        'imcc-blue': '#1d4ed8',
        'imcc-navy-light': '#002d6b',
        'imcc-surface': '#f8fafc',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0, 31, 77, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(0, 31, 77, 0.15)',
        'glow-sky': '0 0 40px rgba(14, 165, 233, 0.15)',
        'glow-navy': '0 0 60px rgba(0, 31, 77, 0.2)',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
