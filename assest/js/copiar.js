function copiarAlPortapapeles(id_elemento) {
    var auxiliar = document.createElement("input");
    auxiliar.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);
    textodevuelto.textContent = "";
}

var textodevuelto = document.getElementById("texto-devuelto");
document.getElementById("copiar").style.display = "none";
textodevuelto.textContent = "";