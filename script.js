const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".msjEncriptado");

/* Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function botonEnc(){
    const txtEnc = encriptar(textArea.value);
    mensaje.value = txtEnc;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesenc(){
    const txtEnc = desencriptar(textArea.value);
    mensaje.value = txtEnc;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i<matrizLlaves.length; i++){
        if(stringEncriptado.includes(matrizLlaves[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringdesencriptado){
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptado = stringdesencriptado.toLowerCase();

    for(let i=0; i<matrizLlaves.length; i++){
        if(stringdesencriptado.includes(matrizLlaves[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0]);
        }
    }
    return stringdesencriptado;
}

