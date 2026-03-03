/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carbon': '#0A0A0A',
        'soft-gray': '#2A2A2A', // Darkened for better contrast in dark mode
        'retro-blue': '#2767F5',
        'glow-blue': 'rgba(39, 103, 245, 0.4)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'pixel': ['VT323', 'monospace'],
        'pixel-title': ['"Press Start 2P"', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blink': 'blink 1.06s step-end infinite',
        'crt': 'crt-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'crt-fade': {
          'from': { opacity: '0', filter: 'blur(4px)', transform: 'translateY(20px)' },
          'to': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), 
                         linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-pixel': {
          'border-style': 'solid',
          'border-width': '2px',
          'border-color': 'rgba(255, 255, 255, 0.1)',
          'image-rendering': 'pixelated',
        },
        '.shadow-pixel': {
          'box-shadow': '4px 4px 0px 0px rgba(39, 103, 245, 0.2)',
        },
        '.hover-jump': {
          'transition': 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            'transform': 'translateY(-4px)',
          },
        },
        '.bg-grid': {
          'background-size': '40px 40px',
          'background-image': `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        },
      })
    },
  ],
}
