function encriptar() {
    let texto = document.getElementById("texto").value.trim(); // Elimina espacios en blanco al inicio y al final
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let alienwaiting15 = document.getElementById("alienwaiting15");

    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (texto.length !== 0) {
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        alienwaiting15.src = "./img/alienwaiting15.png";
        alert("Texto encriptado con éxito"); // Alerta cuando el texto es encriptado
    } else {
        alienwaiting15.src = "./img/alienwaiting.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");  // Alerta cuando no se ingresa texto
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value.trim();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let alienwaiting15 = document.getElementById("alienwaiting15");

    let textoDescifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (texto.length !== 0) {
        document.getElementById("mensaje").value = textoDescifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        alienwaiting15.src = "./img/happyalien15.png";
        alert("Texto desencriptado con éxito"); // Alerta cuando el texto es desencriptado
    } else {
        alienwaiting15.src = "./img/alienwaiting.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");  // Alerta cuando no se ingresa texto
    }
}
