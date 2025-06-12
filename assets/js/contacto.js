// Inicializa EmailJS con tu public key
emailjs.init('wQrd5UTLGbpyDsEMz');

const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita que recargue la página

  emailjs.sendForm('alebernadev', 'template_2abktnk', this)
    .then(() => {
      responseDiv.textContent = "¡Mensaje enviado correctamente! Gracias por contactarme.";
      responseDiv.style.color = "#38bdf8"; // color azul cielo
      form.reset();
    }, (error) => {
      console.error('Error:', error);
      responseDiv.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
      responseDiv.style.color = "#f87171"; // color rojo
    });
});

