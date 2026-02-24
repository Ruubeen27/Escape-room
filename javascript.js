let llaveCogida = false;
let manecillasCogidas = false;

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

function cogerLlave() {
    // Si ya se cogió la llave, no permitir cogerla de nuevo
    if (llaveCogida) {
        return;
    }

    const llave = document.getElementById("llave");
    if (llave) {
        llave.style.display = "none";
        llaveCogida = true;
        alert("¡Has cogido la llave!");
        irAPantalla('sala-estatuas');
        // Ocultar el botón cara-estatua
        const caraEstatua = document.getElementById("cara-estatua");
        if (caraEstatua) {
            caraEstatua.style.display = "none";
        }
    }
}

function cogerManecillas() {
    // Si ya se cogió las manecillas, no permitir cogerla de nuevo
    if (manecillasCogidas) {
        return;
    }

    const manecillas = document.getElementById("manecillas");
    if (manecillas) {
        manecillas.style.display = "none";
        manecillasCogidas = true;
        alert("¡Has cogido las manecillas");
        irAPantalla('sala-cofre');
        // Ocultar el botón cofre
        const interiorCofre = document.getElementById("cofre");
        if (interiorCofre) {
            interiorCofre.style.display = "none";
        }
    }
}

function abrirCofre() {
    if (llaveCogida) {
        alert("¡Has abierto el cofre!");
        irAPantalla('interior-cofre');
    } else {
        alert("¡Necesitas una llave para abrir el cofre!");
    }
}

function mensajeNota() {
    const mensajeNota = document.getElementById("mensajeNota");
    alert("Provisional");
    
}
