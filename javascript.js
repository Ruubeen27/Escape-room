function irAPantalla(idPantalla) {
    // 1. Esconder todas las pantallas
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.classList.add('oculto'));

    // 2. Mostrar solo la que queremos
    document.getElementById(idPantalla).classList.remove('oculto');
}


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

      irAPantalla('castillo');
}

function elegirPersonaje(nombre) {
    console.log("Personaje seleccionado: " + nombre);
    
    // nombre del personaje
    personajeActivo = nombre;
    
    // dice a quien elegimos
    alert("¡Has elegido a " + nombre.toUpperCase() + "!");
    
    // cambiar a la siguiente pantalla (el restaurante)
    irAPantalla('inicio');
}



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





