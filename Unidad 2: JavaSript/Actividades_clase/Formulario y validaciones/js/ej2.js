
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
        const hour = $HOUR.checked;

        if(dni == false || isValidDni(dni) == false){
            debugger
            alert('El dni debe ser un valor válido :'+
             '\n -Debe estar relleno'+ 
             '\n -Debe seguir este modelo: 00.000.000-A');
        } else{
            
            if (name == false || isValidText(name) == false) {
                alert('El nombre debe ser un valor válido :'+
                '\n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            } else {
                if (surname == false || isValidText(surname) == false){
                    alert('El o los apellidos debe ser un valor válido :'+
                    '\n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
                } else{
                    if (phone == false || isValidPhone(phone) == false) {
                        alert('El phone debe ser un valor válido :'+
                        '\n -Debe estar relleno'+ 
                        '\n -Debe estar compuesto por un prefijo (+00) y 9 números');
                    } else {
                        if (comentario == false || isValidComent(comentario) == false) {
                            alert('El comentario tiene que tener un formato válido :'+ 
                            '\n-Debe estar relleno \n -Debe de tener un total de 50 caracteres');
                        } else {
                            if (isValidPassword(password) == false) {
                                alert('El password debe tener:'+ 
                                '\n - longitud mínima de 6 caracteres' +
                                '\n - contener al menos una letra minúscula, una letra mayúscula y un dígito');
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

            letras = letras.join("");

            var encontrado = letras.charAt(resto);
            
            if( letra == encontrado) {
                
                return validacion.test(dni);

            } else{
                alert('El DNI ingresado no es correcto.')
            }

        }         
        
    }

    /*
    function isValidText(text) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(text);
    }

    function isValidPhone(phone) {
        const validacion = /^(\+\d{2}\s\d{9})$/;
        return validacion.test(phone);
    }

    function isValidComent(comentario) {
        const validacion = /^[\s\S]{1,50}$/;
        return validacion.test(comentario);
    }

    function isValidHour(hour) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(phone);
    }
    */
    $FORM.addEventListener('submit', handleSubmit);
}