@import "tailwindcss";
/* Your existing custom CSS below this line */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        engineering: {
          blue: '#005BAA',
          navy: '#0B1F3A',
          gold: '#F4B400',
          steel: '#64748B',
          dark: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,91,170,0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        slideUp: 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': {
            boxShadow: '0 0 20px rgba(0,91,170,0.25)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(0,91,170,0.5)',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
