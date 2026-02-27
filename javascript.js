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
    if (llaveCogida) {
        return;
    }

    const llave = document.getElementById("llave");
    if (llave) {
        llave.style.display = "none";
        llaveCogida = true;
        alert("¡Has cogido la llave!");
        irAPantalla('sala-estatuas');

        const caraEstatua = document.getElementById("cara-estatua");
        if (caraEstatua) {
            caraEstatua.style.display = "none";
        }
    }
}

function cogerManecillas() {

    if (manecillasCogidas) {
        return;
    }

    const manecillas = document.getElementById("manecillas");
    if (manecillas) {
        manecillas.style.display = "none";
        manecillasCogidas = true;

        irAPantalla('sala-cofre');

        const interiorCofre = document.getElementById("cofre");
        if (interiorCofre) {
            interiorCofre.style.display = "none";
        }
    }
}

function abrirCofre() {
    if (llaveCogida) {
        mensajeCofre();
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
    if (codigo === "369") {
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
    mensaje.textContent = "Bienvenidos al último lugar del que querríais formar parte. Las paredes guardan secretos y cada rincón es una pieza de un rompecabezas que no perdona errores. Buscad, razonad y, sobre todo, confiad en vuestro instinto... o quedaos aquí para siempre.";
}

function mensajeNota() {
    let mensaje = document.getElementById("mensaje");
    mensaje.classList.remove("oculto");
    mensaje.textContent = "Soy una escalera que sube de tres en tres. Mi primer paso es un triangulo, mi segundo es media docena, y el ultimo es el final del dia en el reloj que ya conoces.";
}

function mensajeEstatuas() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-estatuas');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "Estas a tan solo una caricia en la megilla para encontrar la llave";
}

function mensajeCofre() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-cofre');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "¡Has encontrado el cofre! Usa la llave para abrirlo";
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
    mensaje.textContent = "¡Para cruzar el umbral, el tiempo debe detenerse donde el día se consume. Tres veces nació la luz, tres veces creció el calor y tres veces descendió el frío. Suma los ciclos para hallar el final!";

}

function mensajeCandado() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-candado');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "La cerradura no cede ante la fuerza, sino ante la verdad. Si buscas la llave de números, deberás seguir el rastro de las hojas carmesí hasta donde el Bosque Rojo exhala su último suspiro. Allí, el final te revelará el camino.";
}

function mensajeFinal() {
    let mensaje = document.getElementById("mensaje");
    irAPantalla('sala-candado');
    mensaje.classList.remove("oculto");
    mensaje.textContent = "El silencio por fin recupera su lugar. Habéis descifrado los latidos del reloj y sobrevivido a las sombras del Bosque Rojo. La puerta se abre, pero los secretos que habéis descubierto os acompañarán siempre. Salid antes de que el tiempo decida arrepentirse.";
}

function borrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = "";
        mensaje.classList.add("oculto");
    }
}
