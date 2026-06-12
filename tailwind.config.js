/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        ink: '#0f172a'
      },
      boxShadow: {
        soft: '0 20px 70px -35px rgba(15, 23, 42, 0.45)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.18), 0 24px 80px -32px rgba(6, 182, 212, 0.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        progress: 'progress 1.2s ease-out forwards'
      }
    }
  },
  plugins: []
};
