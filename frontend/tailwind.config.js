/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#18181b",         // Fondo principal
        darkSection: "#27272a",  // Fondo secciones
        card: "#3f3f46",         // Tarjetas
        textMain: "#f4f4f5",     // Texto principal
        textSecondary: "#a1a1aa",// Texto secundario
        accent: "#38bdf8",       // Acento (sky-400)
        accent2: "#818cf8",      // Acento secundario (indigo-400)
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

