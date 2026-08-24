/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pristine: {
          orange: '#ED6336',
          orangeHover: '#F05A28',
          orangeLight: '#FFF4EF',
          gold: '#C59B27',
          goldLight: '#E8D49E',
          dark: '#171717',
          deep: '#0e0f12',
          card: '#ffffff',
          navy: '#112F5B',
          aqua: '#0ea5e9',
          aquaLight: '#e0f2fe',
          gray: '#787878',
          border: 'rgba(237, 99, 54, 0.25)',
          borderLight: 'rgba(255, 255, 255, 0.7)',
        },
      },
      fontFamily: {
        google: ['"Product Sans"', '"Google Sans"', '"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"EB Garamond"', '"Cinzel"', 'serif'],
        display: ['"Cinzel"', '"Fraunces"', 'serif'],
        sans: ['"Product Sans"', '"Google Sans"', '"Outfit"', '"Poppins"', 'sans-serif'],
      },
      keyframes: {
        waveFlow: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(1.15)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
        waveFlowReverse: {
          '0%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.85)' },
          '100%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        fluidSheen: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'wave-flow': 'waveFlow 18s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-flow-slow': 'waveFlowReverse 24s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'morph-blob': 'morphBlob 10s ease-in-out infinite',
        'fluid-sheen': 'fluidSheen 6s ease infinite',
      },
      boxShadow: {
        'navbar-pill': '0 20px 45px -10px rgba(15, 23, 42, 0.12), inset 0 1px 2px 0 rgba(255, 255, 255, 1)',
        'glass-luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)',
        'glass-card': '0 15px 35px -10px rgba(15, 23, 42, 0.08), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)',
        'pristine-orange': '0 10px 30px rgba(237, 99, 54, 0.35)',
      }
    },
  },
  plugins: [],
}
