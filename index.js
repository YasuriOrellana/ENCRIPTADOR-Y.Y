function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let personaje = document.getElementById("personaje");

  let textoEncriptado = texto
    .replace(/a/gi, "acht")
    .replace(/e/gi, "ein")
    .replace(/i/gi, "immer")
    .replace(/o/gi, "ohne")
    .replace(/u/gi, "und");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoEncriptado;
    tituloMensaje.textContent = "El texto fue encriotado satisfactoriamente";
    parrafo.textContent = "";
    personaje.src = "./img/encriptado.jpg";
  } else {
    personaje.src = "./img/personaje.png";
    tituloMensaje.textContent = "No hay mensajes encontrados";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Olvidaste ingresar un texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let personaje = document.getElementById("personaje");

  let textoEncriptado = texto
    .replace(/acht/gi, "a")
    .replace(/ein/gi, "e")
    .replace(/immer/gi, "i")
    .replace(/ohne/gi, "o")
    .replace(/und/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoEncriptado;
      tituloMensaje.textContent = "El texto fue desencriptado correctamente";
      parrafo.textContent = "";
      personaje.src = "./img/desencriptado.jpg";
    } else {
      personaje.src = "./img/personaje.png";
      tituloMensaje.textContent = "No hay mensajes encontrados";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Olvidaste ingresar un texto");
    }
}
