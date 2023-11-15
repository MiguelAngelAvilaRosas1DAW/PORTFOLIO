/********************************************/
/* Hojas de estilo para autores             */
/* Autor: Miguel Ángel Ávila Rosas          */
/* Version: 1.2                             */
/* Creado el: 6 de noviembre de 2023        */
/* Actualizado el: 15 de noviembre de 2023  */
/********************************************/

function mostrar(elemento) { 
 el=document.getElementById (elemento);
 el.style.visibility="visible";
}

function ocultar(elemento) { 
 el=document.getElementById (elemento);
 el.style.visibility="hidden";
}
 
 function sonar(elemento) {
 var audio = document.getElementById(elemento);
 audio.play();
 }

 function pausar(elemento) {
 var audio = document.getElementById(elemento);
 audio.pause();
 }
