
function registerUser() {

    const $FORM = document.getElementById('formulario');
    const $DNI = document.getElementById('dni')
    const $NAME = document.getElementById('name');
    const $SURNAME = document.getElementById('surname');
    const $PHONE = document.getElementById('phone');
    const $COMMENT = document.getElementById('comentario');
    const $HOUR = document.getElementById('datetime');

    function handleSubmit(e) {

        e.preventDefault();

        const dni = $DNI.value;
        const name = $NAME.value;
        const surname = $SURNAME.value;
        const phone = $PHONE.value;
        const comentario = $COMMENT.value;
        const hour = $HOUR.value;

        if(dni == false || isValidDni(dni) == false){
            alert('El dni debe ser un valor válido :'+
             '\n -Debe estar relleno'+ 
             '\n -Debe tener esta estructura: 00.000.000-A');
        } else{
            
            if (name == false || isValidName(name) == false) {
                alert('El nombre debe ser un valor válido :'+
                '\n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            } else {
                if (surname == false || isValidSurname(surname) == false){
                    alert('El/los apellidos debe ser un valor válido :'+
                    '\n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
                } else{
                    if (phone == false || isValidPhone(phone) == false) {
                        alert('El phone debe ser un valor válido :'+
                        '\n -Debe estar relleno'+ 
                        '\n -Debe seguir la siguiente estructura: (+00)1234567');
                    } else {
                        if (comentario == false || isValidComent(comentario) == false) {
                            alert('El comentario tiene que tener un formato válido :'+ 
                            '\n-Debe estar relleno \n -Debe de tener un máximo de 250 caracteres');
                        } else {
                            if(isValidHour(hour)==false){
                                alert('Se debe se registrar una hora obligatoriamente')
                            } 
                        }
                    }
                }
            }
        }


        var regUsuario = {
            dni: dni, nombre: name, apellido: surname, telefono: phone,
            comentario: comentario, hora: hour
        }; console.log(regUsuario);
        var newUser = JSON.stringify(regUsuario);
        document.getElementById('newUser').innerHTML=newUser;
        console.log(newUser)
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
        
    }

    function isValidName(name) {
        
        if (isNaN(name)){

            const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
            return validacion.test(name);

        }else{
            alert('Esto no es un nombre.')
        }
        
    }

    function isValidSurname(surname) {
        
        if (isNaN(surname)){

            const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
            return validacion.test(surname);

        }else{
            alert('Esto no es un Apellido.')
        }
        
    }

    function isValidPhone(phone) {
        
        const validacion =  /^\(\+\d{2,3}\)\s\d{9}$/;
        return validacion.test(phone);
    }
    
    function isValidComent(comentario) {

        const validacion = /^[\s\S]{1,250}$/;
        return validacion.test(comentario);
    }

    
    function isValidHour(hour) {
        var validacion = true;

        let hh = hour.substring(0,2);
        let mm = hour.substring(3,5);

        if(hh == true && mm ==true){
            return validacion;
        } else{
            return validacion = false;
        }
    }
    

    $FORM.addEventListener('submit', handleSubmit);
}

// contador de caracteres para el textarea. 
const mensaje = document.getElementById('comentario');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});