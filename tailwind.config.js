/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core neutrals — warm, paper-like
        paper: {
          DEFAULT: '#F5F2EB',
          50: '#FBF9F4',
          100: '#F5F2EB',
          200: '#EAE5DA',
          300: '#D8D2C2',
          400: '#A8A39A',
          500: '#7A766C',
          600: '#5A564E',
          700: '#3A3833',
          800: '#1F1E1B',
          900: '#0E0D0B',
        },
        // Primary accent — copper/signal orange (electrical engineering)
        copper: {
          DEFAULT: '#C25E1F',
          50: '#FBF1E8',
          100: '#F2D9C2',
          200: '#E5B38C',
          300: '#D88E5A',
          400: '#D2743A',
          500: '#C25E1F',
          600: '#9F4B14',
          700: '#7A370C',
          800: '#562507',
          900: '#331503',
        },
        // Secondary accent — deep blue (signal blue)
        signal: {
          DEFAULT: '#1B4EFF',
          50: '#E6ECFF',
          100: '#C2CFFF',
          200: '#8AA0FF',
          300: '#5677FF',
          400: '#2D55FF',
          500: '#1B4EFF',
          600: '#0033CC',
          700: '#002699',
          800: '#001A66',
          900: '#000D33',
        },
        // Status colors
        moss: '#3F6B3A',     // available
        rust: '#A13D2A',     // busy/interviewing
        slate: '#3D4A52',    // not available
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-1': ['clamp(2.25rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.0', letterSpacing: '0.2em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marker-draw': 'markerDraw 0.6s ease-out forwards',
        'blink': 'blink 1.2s steps(2) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        markerDraw: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      maxWidth: {
        'reading': '65ch',
        'wide': '78rem',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
