const $FORM = document.getElementById("formulario");
const $DNI = document.getElementById("dni");
const $NOMBRE = document.getElementById("nombre");
const $FECHA = document.getElementById("fecha");
const $HORA = document.getElementById("hora");
const $CONTACTO = document.getElementById("contacto");
const $ESPECIF = document.getElementById("especifica");

function cargarDatos(){
    
let validacion = prompt('Inserta tu DNI para recuperar los datos:');

if(isValidDni(validacion)==false){

    alert('DNI incorrecto, no puedes recuperar los datos.')

} else{
    var reg = JSON.parse(localStorage.getItem('usuario'));
    
    document.getElementById("dni").value = reg.dni;
    document.getElementById("nombre").value = reg.nombre;
    document.getElementById("fecha").value = reg.fecha;
    document.getElementById("hora").value = reg.hora;
    document.getElementById("contacto").value = reg.contacto;
    document.getElementById("especifica").value = reg.especificacion;
}
    
}

function handleSubmit(e){
        
    e.preventDefault();

    const dni = $DNI.value;
    const nombre = $NOMBRE.value;
    const fecha = $FECHA.value;
    const hora = $HORA.value;
    const contacto = $CONTACTO.value;
    const especif = $ESPECIF.value;

    if(dni==false || isValidDni(dni)==false){
        alert('El dni debe ser un valor válido :'+
             '\n -Debe estar relleno'+ 
             '\n -Debe tener esta estructura: 00.000.000-A');
    } else{
        if(nombre==false || isValidNombre(nombre)==false){
            alert('El nombre debe ser un valor válido :'+
            '\n -Debe estar relleno \n -Debe estar compuesto por 2, 3 o 4 palabras');
        } else {
            if(fecha==false || isValidFecha(fecha)==false){
                alert('La fecha debe ser un valor válido :'+
                    '\n - Debe estar relleno'+
                    '\n - Conformato: dd-mm-yyyy');
            } else{
                if(hora==false || isValidHora(hora)==false){
                    alert('La hora debe ser un valor válido :'+
                    '\n - Debe estar relleno'+
                    '\n - Conformato: hh:mm');
                } else{
                    if(contacto==='0'){
                        alert('El tipo de contacto debe de estar Seleccionado.')
                    } else{
                        if(contacto=="TE"){

                            if(especif==false || isValidTelef(especif)==false){
                                alert('El movil debe ser un valor válido :'+
                                    '\n - Debe estar relleno'+
                                    '\n - Conformato: +34 600 600 600');
                            } else{

                                var regUsuario = {
                                    dni: dni, 
                                    nombre: nombre, 
                                    fecha: fecha, 
                                    hora: hora,
                                    contacto: contacto,
                                    especificacion:especif
                                }; 
                                
                                console.log(regUsuario);
                                var newUser = JSON.stringify(regUsuario);
                                document.getElementById('newUser').innerHTML=newUser;
                                console.log(newUser)

                                //recuperar el JASON
                                localStorage.setItem('usuario',newUser)
                                // almacenar
                                
                                localStorage.setItem('usuario',newUser);
                                }

                        } else if(contacto=="EM") {
                            if(especif==false || isValidEmail(especif)==false){
                                alert('El email debe ser un valor válido :'+
                                    '\n - Debe estar relleno'+
                                    '\n - Conformato: xxxxxx@yyyyy.zzz');
                            } else{
                                var regUsuario = {
                                    'dni': dni, 
                                    'nombre': nombre, 
                                    'fecha': fecha, 
                                    'hora': hora,
                                    'contacto': contacto,
                                    'especificacion':especif
                                }; 
                                
                                console.log(regUsuario);
                                var newUser = JSON.stringify(regUsuario);
                                document.getElementById('newUser').innerHTML=newUser;
                                console.log(newUser)

                                //recuperar el JASON
                                localStorage.setItem('usuario',newUser);
                                // almacenar
                                localStorage.setItem('usuario',newUser);
                            }
                        }
                    }
                }
            }
        }
    }
}

function isValidDni(dni) {

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

function isValidNombre(text){
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
 * 10-01-2017
 *
 * @param {string} texto Texto de la forma 2017-01-10
 * @return {string} texto de la forma 10/01/2017
 *
 */
 function formato(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3-$2-$1');
}

function isValidHora(hora){
    const validacion = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    return validacion.test(hora);
}

function isValidTelef(especif){
    const validacion = /^\(\+\d{2,3}\)\s\d{3}\s\d{3}\s\d{3}$/;
}

function isValidEmail(especif){

    const validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return validacion.test(email);
}

$FORM.addEventListener('submit', handleSubmit);