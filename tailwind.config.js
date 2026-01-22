/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      // Aquí definimos las clases que le faltan a tu proyecto
      colors: {
        'heading': '#ffffff', // O el color que prefieras para el texto
        'neutral-primary-soft': '#111827', // El fondo oscuro del botón
      },
      borderRadius: {
        'base': '9999px', // Esto hace que el botón sea redondeado (tipo pastilla)
      }
    },
  },
  plugins: [],
}