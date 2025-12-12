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
        'soft-gray': '#CFCFCF',
        'retro-blue': '#2767F5',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'pixel': ['VT323', 'monospace'],
        'pixel-title': ['"Press Start 2P"', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blink': 'blink 1.06s step-end infinite',
        'crt': 'crt-fade 0.3s ease-out forwards',
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'crt-fade': {
          'from': { opacity: '0', filter: 'blur(2px)' },
          'to': { opacity: '1', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-pixel': {
          'border-style': 'solid',
          'border-width': '4px',
          'border-color': '#0A0A0A',
          'image-rendering': 'pixelated',
        },
        '.shadow-pixel': {
          'box-shadow': '4px 4px 0px 0px #0A0A0A',
        },
        '.hover-jump': {
          'transition': 'transform 0ms',
          '&:hover': {
            'transform': 'translateY(-2px)',
          },
        },
      })
    },
  ],
}
