function encriptar(){
    let texto = document.getElementById("texto").value;
    let mesanjeTitulo = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById ("parrafo");
    let personaje = document.getElementById("personaje");
    let textoCifrado = texto
                  .replace(/e/gi, "enter")
                  .replace(/i/gi, "imes")
                  .replace(/a/gi, "ai")
                  .replace(/o/gi, "ober")
                  .replace(/u/gi, "ufat");
   if (texto.length != 0){
   document.getElementById("texto").value = textoCifrado;
   mesanjeTitulo.textContent = "Texto encriptado con éxito";
   parrafo.textContent="";
   personaje.src= "/img/hacker.jpg";

   }else{
    personaje.src="/img/ningunmensaje_2.png";
    mesanjeTitulo.textContent = "No se ha encontrado ningun mensaje";
    parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
    mostrarAlerta3("Parece que no ingresaste un texto aun");
 }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let mesanjeTitulo = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById ("parrafo");
    let personaje = document.getElementById("personaje");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            mesanjeTitulo.textContent = "Texto desencriptado con éxito";
            parrafo.textContent="";
            personaje.src= "/img/desencriptada.jpg";
        }else{
            personaje.src="/img/ningunmensaje_2.png";
            mesanjeTitulo.textContent = "No se ha encontrado ningun mensaje";
            parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
            mostrarAlerta2();
        }
}
function mostrarAlerta() {
    Swal.fire({
      title: '¡Texto copiado al portapapeles!',
      html: '<i class="fas fa-smile"></i> Gracias por usar mi encriptador.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
  function mostrarAlerta2() {
    Swal.fire({
      title: '¡ingrese el contenido a desencriptar!',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
  function mostrarAlerta3() {
    Swal.fire({
      title: '¡ingrese el contenido a encriptar!',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
  function mostrarAlerta4() {
    Swal.fire({
      title: '¡No hay contenido para copiar!',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  }
  
document.getElementById("boton-copiar").addEventListener("click", function () {
    var textoCopiado = document.getElementById("texto").value;
    if (textoCopiado.length > 0) {
        navigator.clipboard.writeText(textoCopiado).then ;{
            mostrarAlerta();
        }
    }else{
        mostrarAlerta4();
    }
});