import validator from './validator.js';

  const cardnumber = document.getElementById('cardnumber');
  const btninput = document.getElementById("btn-validate");
  const modalcontainer = document.getElementById('modal-container');
  const respuesta = document.getElementById("parrafo");
  const close = document.getElementById('close');
  
  btninput.addEventListener('click', () => {
    modalcontainer.classList.add('show');
  });


  btninput.addEventListener('click', () => {
    const isValid2= validator.isValid(cardnumber.value);
    const maskify= validator.maskify(cardnumber.value);
      console.log(isValid2)
      if (isValid2 === true) {
       respuesta.innerHTML = `La tarjeta  ${maskify}   es Válida`;
    } else {
      respuesta.innerHTML = `La tarjeta  ${maskify}   es Inválida`;
    }  
  });


    close.addEventListener('click', () => {
      modalcontainer.classList.remove('show');
    });

 /*btninput.addEventListener("click",() => {
    const isValid2= validator.isValid(cardnumber.value);
      console.log(isValid2)
      if (isValid2 === true) {
       respuesta.innerHTML = "Tu tarjeta es Válida";
    } else {
      respuesta.innerHTML = "Tu tarjeta es Inválida ";
    }
    })*/
/*modal_container.style.opacity ="1";
    modal_container.style.visibility = "visible";
    modal.classList.toggle("modal-close")*/

    /*
cardnumber.addEventListener('keyup', () => {
  let  numvalidado= validator.isValid(cardnumber.value);
  let newcardnumber = validator.maskify(numvalidado)
  cardnumber.value = newcardnumber
  console.log (cardnumber)
})
*/
 /*cardnumber.addEventListener('keyup', () => {
    let newcardnumber = validator.maskify(cardnumber);
    cardnumber.value = newcardnumber;
    console.log (cardnumber)
  }),*

/*
 btninput.addEventListener("click",() => {
  const isValid2= validator.isValid(cardnumber.value);
    console.log(isValid2)
    if (isValid2 === true) {
     respuesta.innerHTML = "Tu tarjeta es Válida";
  } else {
    respuesta.innerHTML = "Tu tarjeta es Inválida ";
  }
  })*/
/*

  btnagain.addEventListener("click",() => {
    document.getElementById("inputall").value = ('')
  })
*/
  
/*<button type="submit" id="btn-again" class="boton-otra-tj"  >Limpiar</button>*/