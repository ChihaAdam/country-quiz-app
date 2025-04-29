/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing code...
  theme: {
    extend: {
      // ...existing code...
      keyframes: {
        'pulse-delay-0': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
        'pulse-delay-200': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        'pulse-delay-400': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.2 },
        },
      },
      animation: {
        'pulse-delay-0': 'pulse-delay-0 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delay-200': 'pulse-delay-200 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delay-400': 'pulse-delay-400 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  // ...existing code...
}