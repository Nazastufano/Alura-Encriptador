var botonDesencriptador = document.querySelector("button");

function decodificar(frase){ 
    var fraseDescodificada = "";
    var i = 0; 
    while(i < frase.length){
        if(frase[i] == "a" || frase[i] == "á"){
            fraseDescodificada = fraseDescodificada + "a";
            i = i + 2;
        } else if(frase[i] == "e" || frase[i] == "é"){
            fraseDescodificada = fraseDescodificada + "e";
            i = i + 5; 
        } else if(frase[i] == "i" || frase[i] == "í"){
            fraseDescodificada = fraseDescodificada + "i";
            i = i + 4;
        } else if(frase[i] == "o" || frase[i] == "ó"){
            fraseDescodificada = fraseDescodificada + "o";
            i = i + 4;
        } else if(frase[i] == "u" || frase[i] == "ú"){
            fraseDescodificada = fraseDescodificada + "u";
            i = i + 4;
        } else {
            fraseDescodificada += frase[i];
            i++
        }
    }
    return fraseDescodificada;
}        

function verificarDos(){
    var str = textarea.value.toLowerCase();
    decodificar(toString(str));
    document.getElementById("borrar").style.display = "none";
    document.getElementById("copiar").style.display = "inline";
    textodevuelto.textContent = decodificar(str);
    textarea.value = "";
}
