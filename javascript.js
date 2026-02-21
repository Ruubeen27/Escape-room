function irAPantalla(idPantalla) {

    // ocultar todas las secciones que tengan la clase 'pantalla'
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => {
        p.classList.add('oculto');
    });

    //mostrar la pantalla que necesitamos
    const pantallaDestino = document.getElementById(idPantalla);
    if (pantallaDestino) {
        pantallaDestino.classList.remove('oculto');
    } else {
        console.error("No se encontró ninguna pantalla con el id: " + idPantalla);
    }
}

function coger llave() {
    
}