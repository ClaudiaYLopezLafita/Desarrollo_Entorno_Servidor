const $FORM = document.getElementById('formulario');
const $DNI = document.getElementById('dni')
const $NAME = document.getElementById('name');
const $FECHA = document.getElementById('fecha');
const $EMAIL = document.getElementById('email');
const $WEB = document.getElementById('web');
const $PASSWORD = document.getElementById('password');


function handleSubmit(e){

    e.preventDefault();

    const dni = $DNI.value;
    const name = $NAME.value;
    const fecha = $FECHA.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    const password = $PASSWORD.value;
   debugger
    if(dni==false || isValidDni(dni)==false){
        alert('El dni es valido cuando:'+
        '\n - Está lleno.'+
        '\n - El formato: 99.999.999-X')
    } else{
        if(name==false || isValidText(name)==false){
            alert('El nombre debe ser un valor válido :'+
                '\n - Debe estar relleno'+
                '\n - Debe estar compuesto por 1 palabra minimo y 4 máxima');
        } else{
            if(fecha==false || isValidFecha(fecha)==false){
                alert('El nombre debe ser un valor válido :'+
                '\n - Debe estar relleno'+
                '\n - Conformato: dd/mm/yyyy');
            } else{
                if(email==false || isValidEmail(email)==false){
                    alert('La fecha debe ser un valor válido :'+
                    '\n -Debe estar relleno'+
                    '\n -Debe tener siguiente formato: xxxxxx@yyyyy.zzz');
                } else{ 
                    alert('o')
                }
            }
        }
    }

}

function isValidDni(dni) {
    debugger

    const validacion = /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/;

    if(validacion.test(dni)==true){
        var letra = dni.substring(dni.length-1);
        var num = dni.replaceAll('.','').replace('-','');
        var numero = num.substring(0, 8);
        var resto = numero %23;
        var letras =['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; 

        letras = letras.join(""); // unificacion de los items del array para formar un String
        var encontrado = letras.charAt(resto);
        
        if( letra == encontrado) {
            
            return validacion.test(dni);

        } else{
            alert('El DNI ingresado no es correcto.')
        }

    }         
    return validacion.test(dni);
}

function isValidText(text){
    if (isNaN(text)){

        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(text);

    }else{
        alert('Esto no es un nombre.')
    }
}

function isValidFecha(fecha){
    const validacion = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$$/;

    var texto = fecha;
    var salida = formato(texto);

    return validacion.test(salida);

}

/**
 * Convierte un texto de la forma 2017-01-10 a la forma
 * 10/01/2017
 *
 * @param {string} texto Texto de la forma 2017-01-10
 * @return {string} texto de la forma 10/01/2017
 *
 */
 function formato(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}

function isValidEmail(email){

    const validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return validacion.test(email);
}
/*
function isValidWeb(web){
    const validacion=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    return validacion.test(web);
}*/


$FORM.addEventListener('submit', handleSubmit);

