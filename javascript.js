let llaveCogida = false;
let manecillasCogidas = false;
let manecillasEn9 = false;

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
    borrarMensaje();
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
       
        irAPantalla('interior-cofre');
    } else {
        alert("¡Necesitas una llave para abrir el cofre!");
    }
}

function pruebaReloj() {
    let puertaBReloj = document.getElementById("puertaBReloj");
    let boton9 = document.getElementById("boton9");
    if (manecillasCogidas) {

        alert("¡Has colocado las manecillas en el número 9 y has abierto la puerta!");
        puertaBReloj.classList.remove('oculto');
        boton9.style.display = "none";
    } else {
        alert("¡Necesitas unas manecillas!");
    }
}

function codigoCandado() {
    const codigo = prompt("Introduce el código de 4 dígitos:");
    if (codigo === "1234") {
        alert("¡Código correcto! Has abierto la puerta.");
        irAPantalla('salida');
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
function mensajeEntrada() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('castillo');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Bienvenido al Escape Room! Explora las habitaciones y resuelve los acertijos para escapar.";
}

function mensajeNota() {
    let mensaje = document.getElementById("mensaje");
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Has leído la nota! El código del candado es 1234.";
}

function mensajeEstatuas() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-estatuas');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Has entrado en la sala de las estatuas! Busca pistas para encontrar la llave.";
}


function mensajeCofre() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-cofre');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Has encontrado el cofre! Usa la llave para abrirlo y coger las manecillas.";
}

function mensajeInteriorCofre() {
    let mensaje = document.getElementById("mensaje");
   abrirCofre();
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Has abierto el cofre! Has encontrado las manecillas del reloj.";

}

function mensajeReloj() {
    let mensaje = document.getElementById("mensaje");
     irAPantalla('sala-reloj');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Aqui encontraras el acertijo del reloj!";
   
}


function borrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = "";
        mensaje.classList.add("oculto");
    }
}
