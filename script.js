document.addEventListener('DOMContentLoaded', () => {
    const proyectosPorPagina = 6;
    let paginaActual = 1;
    
    const proyectos = document.querySelectorAll('.proyecto-item');
    const totalPaginas = Math.ceil(proyectos.length / proyectosPorPagina);

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const spanPaginaActual = document.getElementById('pagina-actual');
    const spanTotalPaginas = document.getElementById('total-paginas');

    function actualizarVista() {
        // --- LA SOLUCIÓN AL SALTO ---
        // Guardamos la posición exacta de la pantalla antes de cambiar nada
        const scrollFix = window.scrollY;

        const inicio = (paginaActual - 1) * proyectosPorPagina;
        const fin = inicio + proyectosPorPagina;

        proyectos.forEach((proy, index) => {
            if (index >= inicio && index < fin) {
                proy.style.display = 'flex';
            } else {
                proy.style.display = 'none';
            }
        });

        if (spanPaginaActual) spanPaginaActual.innerText = paginaActual;
        if (spanTotalPaginas) spanTotalPaginas.innerText = totalPaginas;
        
        btnPrev.disabled = (paginaActual === 1);
        btnNext.disabled = (paginaActual === totalPaginas);

        // Devolvemos la pantalla exactamente a donde estaba
        // Esto anula el "reajuste" automático del navegador
        window.scrollTo(0, scrollFix);
    }

    btnPrev.onclick = (e) => {
        e.preventDefault();
        if (paginaActual > 1) {
            paginaActual--;
            actualizarVista();
        }
    };

    btnNext.onclick = (e) => {
        e.preventDefault();
        if (paginaActual < totalPaginas) {
            paginaActual++;
            actualizarVista();
        }
    };

    actualizarVista();
});