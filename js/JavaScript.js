function entra() {
    // Cambio la imagen de fondo cuando entro en la mansión.
    // document.getElementById("principal").style.backgroundImage = "url(../imgEntrada-castillo.jpg)";
    document.getElementById("principal").style.backgroundImage = "url('../img/Puertas-colores.jpg')";
    // Cambio el mensaje del bocadillo
    document.getElementById("parrafo1").innerHTML = "Entraste al castillo.";
    document.getElementById("parrafo2").innerHTML = "En la sala se ven 2 puertas de colores: roja y azul.";
    document.getElementById("parrafo3").innerHTML = "¿Cual eliges?";
}