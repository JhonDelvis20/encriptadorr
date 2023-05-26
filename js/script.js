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
   personaje.src= "./img/hacker.jpg";

   }else{
    personaje.src="./img/ningunmensaje_2.png";
    mesanjeTitulo.textContent = "No se ha encontrado ningun mensaje";
    parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
    alert("Parece que no ingresaste un texto aun");
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
            personaje.src= "./img/desencriptada.jpg";
        }else{
            personaje.src="./img/ningunmensaje_2.png";
            mesanjeTitulo.textContent = "No se ha encontrado ningun mensaje";
            parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
            alert("Parece que no ingresaste un texto aun");
        }
}