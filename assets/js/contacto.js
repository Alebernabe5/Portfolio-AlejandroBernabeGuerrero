document.addEventListener('DOMContentLoaded', () => {
    // Inicializa EmailJS con tu Public Key
    emailjs.init('wQrd5UTLGbpyDsEMz');

    const form = document.getElementById('contactForm');
    
    // Si el formulario no existe en esta página, detenemos el script
    if (!form) return;

    // --- RECUPERAMOS TU MODAL ---
    const modal = document.createElement('div');
    modal.id = 'confirmationModal';
    modal.className = 'fixed inset-0 flex items-center justify-center bg-black/80 z-[100] hidden px-4';
    modal.innerHTML = `
      <div class="bg-gray-900 border border-sky-500/30 text-white rounded-2xl p-8 max-w-sm shadow-[0_0_50px_rgba(56,189,248,0.2)] text-center transform transition-all">
        <div id="modalIcon" class="text-4xl mb-4"></div>
        <p id="modalMessage" class="mb-6 font-medium text-lg text-gray-200 leading-relaxed"></p>
        <button id="closeModal" class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/20">
          Entendido
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#closeModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    async function handleFormSubmit(event) {
        event.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const modalIcon = document.getElementById('modalIcon');
        const modalMsg = document.getElementById('modalMessage');
        
        try {
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

            // Envío usando sendForm (detecta los 'name' del HTML: nombre, email, mensaje)
            await emailjs.sendForm('alebernadevNuevo', 'template_2abktnk', form);
            
            // ÉXITO: Mostramos el modal chulo
            modalIcon.textContent = '🚀';
            modalMsg.textContent = '¡Tu mensaje ha volado con éxito! Me pondré en contacto contigo muy pronto.';
            modal.classList.remove('hidden');
            form.reset();
            
        } catch (error) {
            console.error('Error:', error);
            // ERROR: Modal con advertencia
            modalIcon.textContent = '⚠️';
            modalMsg.textContent = 'Hubo un pequeño problema al enviar. Por favor, inténtalo de nuevo.';
            modal.classList.remove('hidden');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    form.addEventListener('submit', handleFormSubmit);
});