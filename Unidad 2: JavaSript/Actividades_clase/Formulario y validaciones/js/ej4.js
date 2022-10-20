const $FORM = document.getElementById('formulario');
const $FECHA = document.getElementById('fecha');
const $COCINERO = document.getElementById('cocinero');
const $DESTINATARIO = document.getElementById('destinatario');
const $GRAMOS = document.getElementById('gramos');
const $COMPOSICION = document.getElementById('composicion');
const $NUMERO = document.getElementById('numBancario');

function handleSubmit(e){

    e.preventDefault();

    const fecha = $FECHA.value;
    const cocinero = $COCINERO.value;
    const destinatario = $DESTINATARIO.value;
    const gramos = $GRAMOS.value;
    const composicion = $COMPOSICION.value;
    const numBancario = $NUMERO.value;
    debugger

    if (fecha == false || isValidFecha(fecha) == false){
        alert('La fecha debe ser un valor válido :'+
        '\n - Debe estar relleno'+
        '\n - Con formato: dd/mm/aaaa');
    } else{
        if (cocinero==false || isValidCocinero(cocinero)==false){
            alert('EL cocinero debe ser un valor válido :'+
            '\n - Debe estar relleno'+
            '\n - Con formato: WW$1234');
        } else {
            if (destinatario == false || isValidDest(destinatario)==false){
                alert('El destinatario debe ser un valor válido :'+
                '\n - Debe estar relleno'+
                '\n - Con formato: NM_alburquerque:1234');
            } else{
                if (gramos ==false || isValidGramo(gramos)==false){
                    alert('Los gramos debe ser un valor válido :'+
                    '\n - Debe estar relleno'+
                    '\n - Cantidad entre 100 - 5000');
                } else{
                    if (composicion == false || isValidComp(composicion)==false){
                        alert('La composicion debe ser un valor válido :'+
                        '\n - Debe estar relleno'+
                        '\n - Con formato: 200gC3OH7');
                    } else{
                        debugger
                        if (numBancario == false || isValidCuenta(numBancario)==false){
                            alert('La cuenta debe ser un valor válido :'+
                            '\n - Debe estar relleno'+
                            '\n - Con formato: XX11-111111111111-11');
                        } else {
                            var newFecha = formato(fecha);
                            
                            var regUsuario = {
                                fecha: newFecha,
                                cocinero: cocinero,
                                destinatario: destinatario,
                                gramos:gramos, 
                                composicion: composicion,
                                numBancario: numBancario,
                            }; 
                            console.log(regUsuario);
                            var newUser = JSON.stringify(regUsuario);
                            document.getElementById('newUser').innerHTML=newUser;
                            console.log(newUser)
                        }
                    }
                }
            }
        }
    }

}

function isValidFecha(fecha){
    const validacion = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$$/;

    var texto = fecha;
    var salida = formato(texto);

    return validacion.test(salida);

}

 function formato(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}

function isValidCocinero(cocinero){
    const validacion = /^([A-Z]{2}.[0-9]{4})$/;
    return validacion.test(cocinero);
}

function isValidDest(destinatario){

    const validacion = /^([A-Z]{2,3}_([\wáéíóúÁÉÍÓÚ]+):\d{4})$/;
    return validacion.test(destinatario);
}

function isValidGramo(gramos){
    
    var gr = parseInt(gramos);

    if (gr >=100 && gr <=5000){
        return true;
    }

    return false;

}

function isValidComp(composicion){

    const validacion = /^(\d{3,4}g[A-Z]{1,2}\d{0,1}[A-Z]{1,2}\d{0,1})$/;
    return validacion.test(composicion);
}

function isValidCuenta(numBancario){

    const validacion = /^([A-Z]{2}\d{2}-\d{12}-\d{2})$/;

    if(validacion.test(numBancario)){

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let firstLetter = numBancario[0];
        let secondLetter = numBancario[1];

        let firstLetterValue = letters.indexOf(firstLetter)+1;
        let secondLetterValue = letters.indexOf(secondLetter)+1;

        let firstDigits = numBancario.substring(2,4);

        let sumaLettersValue = firstLetterValue+secondLetterValue;

        let firstControlDigit = parseInt(numBancario.substring(18,19));
        let secondControlDigit = parseInt(numBancario.substring(19,20));

        let firstPart = numBancario.substring(5,11);
        let secondPart = numBancario.substring(11,17);

        let sumaFirstPart = 0;
        let sumaSecondPart = 0;
        let firstControlDigitValue;
        let secondControlDigitValue;
        
        if((firstLetter==="L" && secondLetter==="L")||(firstLetter==="Ñ" || secondLetter==="Ñ")){
          return false;
          alert('La cuenta no puede tener ni Ñ ni LL');
        } else{
          if(sumaLettersValue===parseInt(firstDigits)){
            if((sumaLettersValue<10 && parseInt(firstDigits[0])===0) || (sumaLettersValue>=10)){
              
                for(let i = 0; i<firstPart.length; i++){
                sumaFirstPart += parseInt(firstPart[i]);
                sumaSecondPart += parseInt(secondPart[i]);
              }

              firstControlDigitValue = parseInt(sumaFirstPart/6);
              secondControlDigitValue = parseInt(sumaSecondPart/6);

              if(firstControlDigit === firstControlDigitValue && secondControlDigit === secondControlDigitValue){
                
                fullIban = numBancario.replaceAll("-", "");
               
                document.getElementById("cuenta").hidden = false;
                document.getElementById("cuenta").disabled = true;
               
                document.getElementById("cuenta").value = fullIban;
              } else{
                return false;
              }
            } else{
              return false
            }
          } else{
            return false;
          }
        }
      } else{
        return false;
      }

}

$FORM.addEventListener('submit', handleSubmit);


