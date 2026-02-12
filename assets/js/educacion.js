{
  const iaData = {
    title: 'IA & Big Data Specialist',
    subtitle: 'IES Punta del Verde',
    // He resumido tus asignaturas en estos 4 bloques clave
    modules: [
      '<strong>Infraestructura y Almacenamiento:</strong> Despliegue con Docker, gestión de clústeres en la nube (MongoDB Atlas, AWS), bases de datos NoSQL y Grafos (Neo4j).',
      '<strong>Ecosistema Big Data:</strong> Procesamiento distribuido con Hadoop (HDFS, MapReduce), Spark y administración de sistemas de archivos masivos.',
      '<strong>Inteligencia Artificial y ML:</strong> Desarrollo de modelos supervisados y no supervisados, Redes Neuronales (Perceptrón, CNN), Procesamiento del Lenguaje Natural (NLP) y Ética en IA.',
      '<strong>Data Science y Programación:</strong> Análisis avanzado con Python (Numpy, Pandas) y R, estadística diagnóstica, visualización en cuadros de mando (Power BI) y limpieza de datos (EDA).'
    ]
  };

  window.openModal = function(id) {
    if (id !== 'modal-ia') return;

    const container = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
      <div class="mb-6 text-center md:text-left">
        <p class="text-sky-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">${iaData.subtitle}</p>
        <h3 class="text-2xl font-bold text-white uppercase tracking-tighter">${iaData.title}</h3>
      </div>
      <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        ${iaData.modules.map(text => `
          <div class="flex items-start gap-4 bg-sky-500/5 p-4 rounded-xl border border-sky-500/10 hover:border-sky-500/30 transition-colors">
            <div class="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.6)]"></div>
            <p class="text-gray-300 text-sm leading-relaxed">${text}</p>
          </div>
        `).join('')}
      </div>
    `;

    container.classList.remove('hidden');
    container.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    const container = document.getElementById('modal-container');
    container.classList.add('hidden');
    container.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  window.onclick = (e) => { if (e.target.id === 'modal-container') closeModal(); };
  window.onkeydown = (e) => { if (e.key === 'Escape') closeModal(); };
}