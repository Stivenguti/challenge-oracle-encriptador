
const text = undefined;
const replace = undefined;

inputText.focus();
function encriptar(){
    var text = document.getElementById("inputText").value;
    var texten = text.replace(/e/igm, "enter").replace(/o/igm, "ober").replace(/i/igm, "imes").replace(/a/igm, "ai").replace(/u/igm, "ufat");
    
    // document.getElementById("imgdere").style.display = "none"; = esta linea esta en error, estoy buscando solucion
    document.getElementById("text").style.display = "none";
    document.getElementById("text1").innerHTML = texten;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    inputText.value = "";
    inputText.focus();
}

inputText.focus();
function desencriptar(){
    var text = document.getElementById("inputText").value;
    var texten = text.replace(/enter/igm, "e").replace(/ober/igm, "o").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ufat/igm, "u");

    // document.getElementById("imgdere").style.display = "none"; = esta linea esta en error, estoy buscando solucion
    document.getElementById("text").style.display = "none";
    document.getElementById("text1").innerHTML = texten;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    // inputText.value = "";
    inputText.focus();
}

inputText.focus();
function copiar(){
    var copy = document.getElementById("text1");
    copy.select();
    document.execCommand("cut");

    // inputText.value = "";
    inputText.focus();
}