/********************************************/
/* Hojas de estilo para autores             */
/* Autor: Miguel Ángel Ávila Rosas          */
/* Version: 0.1                             */
/* Creado el: 6 de noviembre de 2023        */
/* Actualizado el: 6 de noviembre de 2023   */
/********************************************/

function show(element){
  document.getElementById(element).style.visibility="visible";
}

function hide(element){
  document.getElementById(element).style.visibility="hidden";
}

function sound (element) {
  document.getElementById(element).style.play()
}

function silence (element) {
  document.getElementById(element).style.pause()
}