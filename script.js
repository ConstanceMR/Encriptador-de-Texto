
const textArea = document.getElementById("text-area");
const textAreaMensaje = document.getElementById("text-area-mensaje");
const botonLimpiar = document.getElementById("limpiar-Btn");


function limpiarTextAreas() {
    textAreaMensaje.value = "";
    textArea.value = "";

    textAreaMensaje.style.height = "auto";
    textArea.style.height = "auto";
}

function btnBorrar() {
    limpiarTextAreas();
}

function ajusteAlturaTextArea(elementoTextArea) {
    elementoTextArea.style.height = "auto"; 
    elementoTextArea.style.height = elementoTextArea.scrollHeight + "px"; 
}

textArea.addEventListener("input", function() {
    ajusteAlturaTextArea(this);
    
})

textAreaMensaje.addEventListener("input", function() {
    textArea.value = textArea.value
    ajusteAlturaTextArea(this);
    
})

function encriptar(fraseEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return fraseEncriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    textAreaMensaje.value = textoEncriptado;
    textArea.value = "";
    textAreaMensaje.style.backgroundImage = "none";

   
    ajusteAlturaTextArea(textAreaMensaje);
    
    document.querySelector(".text__area__mensaje").style.display = "none";
    document.querySelector(".boton__copiar").style.display = "block";
    document.querySelector(".boton__borrar").style.display = "block";
    
    
}

function desencriptar(fraseDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return fraseDesencriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    textAreaMensaje.value = textoDesencriptado;
    textArea.value = "";

    ajusteAlturaTextArea(textAreaMensaje); 
}

function copiarMensaje() {
    textArea.value = textAreaMensaje.value;
}

function btnCopiar() {
    copiarMensaje();
    textAreaMensaje.value = "";
}


