import validator from './validator.js';

console.log(validator.isValid());

  /*
1. traer la funcion de validator
2. si es true lanzar retur SU TARJETA ES VALIDA
--sino es INVALIDA
3.boton validar
4.boton limpiar o probar otra tarjeta
*/
/*
function isValid() {
  const isValid = validator.isValid("cardnumber");
const cardnumber = document.getElementById("cardnumber");
const btnvalidate = document.getElementById('btnvalidate');
let message = '';

if (validator.isValid(carsnumber.value) === true)
message = "tarjeta valida";
  
else
message = "tarjeta invalida";
} 
*/


const isValid = validator.isValid('cardnumber');

const cardnumberinput = document.getElementById('cardnumber');
const botonvalidate = document.getElementById('btnvalidate');
let message = '';

btn.validate.addEventListener ("click",(e)) ; {e.preventDefault();
  if (isValid === true) {
    message = "Tarjeta Válida"
  } else {
    message = "Tarjeta Inválida"
  }
}

$formName.addEventListener("submit", handleSubmitName);