var botonEncriptador = document.querySelector("button");
var textarea = document.querySelector("textarea");

function codificar(frase){
    var fraseCodificada = "";
    for(var i = 0; i < frase.length; i++){
        if(frase[i] == "a" || frase[i] == "á"){
            fraseCodificada = fraseCodificada + "ai";
        } else if(frase[i] == "e" || frase[i] == "é"){
            fraseCodificada = fraseCodificada + "enter"
        } else if(frase[i] == "i" || frase[i] == "í"){
            fraseCodificada = fraseCodificada + "imes"
        } else if(frase[i] == "o" || frase[i] == "ó"){
            fraseCodificada = fraseCodificada + "ober"
        } else if(frase[i] == "u" || frase[i] == "ú"){
            fraseCodificada = fraseCodificada + "ufat"
        } else {
            fraseCodificada += frase[i];
        }
    }
    return fraseCodificada;
}

function verificar(){
    var str = textarea.value.toLowerCase();
    codificar(toString(str));
    document.getElementById("borrar").style.display = "none";
    document.getElementById("copiar").style.display = "inline";
    textodevuelto.textContent = codificar(str);
    textarea.value = "";
}