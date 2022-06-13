import validator from './validator.js';

  const cardnumber = document.getElementById('cardnumber');
  const btninput = document.getElementById("btn-validate");
  const respuesta = document.getElementById("parrafo");
  
 
  /*cardnumber.addEventListener('keyup', () => {
    let newcardnumber = validator.maskify(cardnumber);
    cardnumber.value = newcardnumber;
    console.log (cardnumber)
  }),*/
  
   btninput.addEventListener("click",() => {
    const isValid2= validator.isValid(cardnumber.value);
      console.log(isValid2)
      if (isValid2 === true) {
       respuesta.innerHTML = "Tu tarjeta es Válida";
    } else {
      respuesta.innerHTML = "Tu tarjeta es Inválida ";
    }
    })


/*
cardnumber.addEventListener('keyup', () => {
  let  numvalidado= validator.isValid(cardnumber.value);
  let newcardnumber = validator.maskify(numvalidado)
  cardnumber.value = newcardnumber
  console.log (cardnumber)
})

 btninput.addEventListener("click",() => {
  const isValid2= validator.isValid(cardnumber.value);
    console.log(isValid2)
    if (isValid2 === true) {
     respuesta.innerHTML = "Tu tarjeta es Válida";
  } else {
    respuesta.innerHTML = "Tu tarjeta es Inválida ";
  }
  })


  btnagain.addEventListener("click",() => {
    document.getElementById("inputall").value = ('')
  })
*/
  
/*<button type="submit" id="btn-again" class="boton-otra-tj"  >Limpiar</button>*/