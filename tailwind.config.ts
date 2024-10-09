// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Otras rutas que contengan tus componentes
    './pages/**/*.{js,ts,jsx,tsx}', // Si usas el router anterior
    './components/**/*.{js,ts,jsx,tsx}', // Tus componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
