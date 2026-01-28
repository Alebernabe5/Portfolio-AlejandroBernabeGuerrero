
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-solid-bg");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});


// CARGAR CURSOS 
const certificados = [
  {
    titulo: "Curso completo de Git y GitHub",
    descripcion: "Formación técnica en el dominio del ciclo de vida de software mediante control de versiones. Incluye gestión de repositorios (locales/remotos), estrategias de ramificación y técnicas avanzadas como Merge y Rebase.",
    plataforma: "Udemy",
    instructor: "Alvaro Chirou",
    fecha: "Agosto 2023",
    duracion: "10 Horas",
    enlace: "./assets/certificadosCursos/cursoGitUdemy.pdf",
    esExternal: false
  },
  {
    titulo: "Microsoft Office Specialist: Excel Associate (Office 2019)",
    descripcion: "Certificación oficial de Microsoft que acredita un dominio fundamental de Excel para la ejecución de tareas de forma independiente. Capacidad para la creación y edición de libros de trabajo complejos, gestión de múltiples hojas y uso de elementos gráficos para la representación visual de datos.",
    plataforma: "Microsoft (Certificación Oficial)",
    instructor: "Plataforma JasperActive",
    fecha: "Junio 2024",
    duracion: "50 Horas",
    enlace: "https://www.credly.com/badges/ef1958c7-7766-47b6-babb-5dae89bdbcd9/linked_in_profile",
    esExternal: true
  }
];

function renderizarCursos() {
  const contenedor = document.getElementById('contenedor-cursos');
  if (!contenedor) return;

  contenedor.innerHTML = certificados.map(curso => `
    <details class="curso-item border-l-4 border-yellow-500 bg-gray-900/50 rounded-r-xl overflow-hidden transition-all mb-4">
      <summary class="list-none flex justify-between items-center p-4 cursor-pointer hover:bg-sky-500/10">
        <span class="font-semibold text-gray-100">${curso.titulo}</span>
        <span class="text-xs text-sky-400 font-bold uppercase tracking-widest">Detalles</span>
      </summary>
      
      <div class="p-6 bg-black/40 border-t border-gray-800">
        <p class="text-sm text-gray-300 mb-6 leading-relaxed">${curso.descripcion}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="flex items-center gap-3 text-gray-400">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <span class="text-xs uppercase tracking-wider font-semibold">Plataforma:</span>
            <span class="text-xs text-sky-200">${curso.plataforma}</span>
          </div>

          <div class="flex items-center gap-3 text-gray-400">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span class="text-xs uppercase tracking-wider font-semibold">Instructor:</span>
            <span class="text-xs text-sky-200">${curso.instructor}</span>
          </div>

          <div class="flex items-center gap-3 text-gray-400">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span class="text-xs uppercase tracking-wider font-semibold">Finalizado:</span>
            <span class="text-xs text-sky-200">${curso.fecha}</span>
          </div>

          <div class="flex items-center gap-3 text-gray-400">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span class="text-xs uppercase tracking-wider font-semibold">Duración:</span>
            <span class="text-xs text-sky-200">${curso.duracion}</span>
          </div>
        </div>

        <div class="flex justify-start">
          <a href="${curso.enlace}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-sky-900/20">
            <svg class="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${curso.esExternal 
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>' 
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>'}
            </svg>
            ${curso.esExternal ? 'Ver Credencial Oficial' : 'Ver Certificado PDF'}
          </a>
        </div>
      </div>
    </details>
  `).join('');
}

// Iniciar al cargar la web
document.addEventListener('DOMContentLoaded', renderizarCursos);