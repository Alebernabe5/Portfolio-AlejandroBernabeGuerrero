const skills = [
  { nombre: "HTML", sprite: "html", clases: "bg-gradient-to-br from-orange-800 via-orange-600 to-orange-400 border-orange-900 col-span-1 sm:col-span-2", textCol: "text-white", iconPos: "-right-4 -bottom-4" },
  { nombre: "CSS", sprite: "css", clases: "bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 border-blue-900 col-span-1 sm:col-span-1", textCol: "text-white", iconPos: "-right-0 -bottom-1.5" },
  { nombre: "JavaScript", sprite: "javascript", clases: "bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-100 border-yellow-500", textCol: "text-black", iconPos: "-right-2 -bottom-1.5" },
  { nombre: "Java", sprite: "java", clases: "bg-gradient-to-br from-red-900 via-red-400 to-red-100 border-red-900", textCol: "text-white", iconPos: "-right-0 -bottom-0" },
  { nombre: "Python", sprite: "python", clases: "bg-gradient-to-br from-[#1e415e] via-[#3776ab] to-[#ffd343] border-[#1e415e]", textCol: "text-white", iconPos: "-right-0 -bottom-0" },
  { nombre: "PHP", sprite: "php", clases: "bg-gradient-to-br from-indigo-950 via-indigo-200 to-slate-300 border-indigo-900", textCol: "text-white", iconPos: "-right-2 -bottom-4" },
  { nombre: "Laravel", sprite: "laravel", clases: "bg-gradient-to-br from-gray-900 via-slate-800 to-slate-700 border-slate-900", textCol: "text-white", iconPos: "-right-2 -bottom-1.5" },
  { nombre: "Unity", sprite: "unity", clases: "bg-gradient-to-br from-gray-900 via-slate-800 to-slate-700 border-slate-900", textCol: "text-white", iconPos: "-right-2 -bottom-1.5", extraIconClass: "filter invert brightness-150 contrast-200" },
  { nombre: "Android Studio", sprite: "android", clases: "bg-gradient-to-br from-green-800 via-emerald-700 to-blue-900", textCol: "text-white", iconPos: "-right-2 -bottom-1.5" },
  { nombre: "Git", sprite: "git", clases: "bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-600 border-zinc-800", textCol: "text-white", iconPos: "-right-2 -bottom-1.5", badge: "Control de versiones" },
  { nombre: "GitHub", sprite: "gitHub", clases: "bg-gradient-to-br from-zinc-900 via-neutral-800 to-stone-700 border-neutral-900", textCol: "text-white", iconPos: "-right-2 -bottom-1.5", badge: "Repositorios & Código", url: "https://github.com/Alebernabe5" },
  { nombre: "MySQL", sprite: "mysql", clases: "bg-gradient-to-br from-blue-900 via-cyan-800 to-amber-600 border-blue-900", textCol: "text-white", iconPos: "-right-4 -bottom-4" },
  { nombre: "SQLite", sprite: "sqLite", clases: "bg-gradient-to-br from-blue-900 via-cyan-800 to-amber-600 border-blue-900", textCol: "text-white", iconPos: "-right-0 -bottom-4" },
  { nombre: "Bootstrap", sprite: "bootstrap", clases: "bg-gradient-to-br from-fuchsia-900 via-purple-800 to-indigo-700", textCol: "text-white", iconPos: "-right-2 -bottom-1.5" },
  { nombre: "Figma", sprite: "figma", clases: "bg-gradient-to-br from-neutral-900 via-gray-800 to-violet-700", textCol: "text-white", iconPos: "-right-2 -bottom-0" },
  { nombre: "Adobe XD", sprite: "adobeXD", clases: "bg-gradient-to-br from-fuchsia-800 via-pink-700 to-purple-900", textCol: "text-white", iconPos: "-right-2 -bottom-1.5" }
];

function renderizarSkills() {
  const contenedor = document.getElementById('contenedor-skills');
  if (!contenedor) return;

  contenedor.innerHTML = skills.map(skill => `
    <${skill.url ? 'a href="'+skill.url+'" target="_blank" rel="noopener noreferrer"' : 'div'} 
      class="relative rounded-3xl overflow-hidden flex flex-col items-start hover:scale-105 hover:contrast-125 transition group p-7 min-h-[150px] ${skill.clases}">
      
      ${skill.badge ? `<span class="absolute top-2 left-2 text-[10px] border border-white/40 text-white rounded-xl px-2 py-0.5 bg-black/30 z-20">${skill.badge}</span>` : ''}

      <span class="absolute bottom-2 left-0 font-bold text-2xl ${skill.textCol} group-hover:-translate-y-1 transition-transform duration-300 z-10">
        ${skill.nombre}
      </span>

      <svg class="absolute ${skill.iconPos} -rotate-10 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform duration-300 ${skill.extraIconClass || ''}" width="100" height="100">
        <use xlink:href="./assets/sprite.svg#${skill.sprite}" />
      </svg>
    </${skill.url ? 'a' : 'div'}>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderizarSkills);