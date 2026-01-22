/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",   // Escanea el HTML y JS en la raíz
    "./pages/**/*.{html,js}", // Escanea carpetas secundarias si las tienes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}