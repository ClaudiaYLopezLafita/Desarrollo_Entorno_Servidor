const $FORM = document.getElementById('formulario');
const $DNI = document.getElementById('dni')
const $NAME = document.getElementById('name');
const $FECHA = document.getElementById('fecha');
const $EMAIL = document.getElementById('email');
const $WEB = document.getElementById('web');
const $PASSWORD = document.getElementById('password');

function cargarDatos(){
    
    var reg = JSON.parse(sessionStorage.getItem('usuario'));

    document.getElementById("dni").value = reg.dni;
    document.getElementById("name").value = reg.nombre;
    document.getElementById("fecha").value = reg.fecha;
    document.getElementById("email").value = reg.correo;
    document.getElementById("web").value = reg.web;
    document.getElementById("password").value = reg.password;
    
}

function handleSubmit(e){

    e.preventDefault();

    const dni = $DNI.value;
    const name = $NAME.value;
    const fecha = $FECHA.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    const password = $PASSWORD.value;
   
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
                alert('La fecha debe ser un valor válido :'+
                '\n - Debe estar relleno'+
                '\n - Conformato: dd/mm/yyyy');
            } else{
                if(email==false || isValidEmail(email)==false){
                    alert('El correo debe ser un valor válido :'+
                    '\n -Debe estar relleno'+
                    '\n -Debe tener siguiente formato: xxxxxx@yyyyy.zzz');
                } else{ 
                   if(web == false || isValidWeb(web)==false){
                        alert('La página web debe ser un valor válido :'+
                        '\n -Debe estar relleno'+
                        '\n -Debe tener siguiente formato: http://www.xxxx.yyy');
                   } else{
                        if(password==false || isValidPassword(password)==false){
                            alert('La contraseña debe ser un valor válido :'+
                            '\n -Debe tener entre 8 y 10 caracteres'+
                            '\n -Debe estar relleno');
                        } else {
                            var newFecha = fecha;
                            var regUsuario = {
                                dni:dni,
                                nombre: name,
                                fecha: newFecha,
                                correo:email, 
                                web: web,
                                password: password
                            }; 
                            console.log(regUsuario);
                            var newUser = JSON.stringify(regUsuario);
                            document.getElementById('newUser').innerHTML=newUser;
                            console.log(newUser);
                            //recuperar el JASON
                            localStorage.setItem('usuario',newUser)
                            // almacenar
                            sessionStorage.setItem('usuario',newUser);

                        }
                   }
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
    const validacion = /^(\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*)$$/;
    var salida = fecha;

    return validacion.test(salida);

}

function isValidEmail(email){

    const validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return validacion.test(email);
}

function isValidWeb(web){
    const validacion=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    return validacion.test(web);
}

function isValidPassword(password){

    const validacion = /^[a-zA-Z0-9!@#$%^&*]{8,10}$/;
    return validacion.test(password);
}

$FORM.addEventListener('submit', handleSubmit);

