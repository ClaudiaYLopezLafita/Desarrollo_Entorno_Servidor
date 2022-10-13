    const $FORM = document.getElementById('formulario');
    const $NAME = document.getElementById('name');
    const $SURNAME = document.getElementById('surname');
    const $EMAIL = document.getElementById('email');
    const $WEB= document.getElementById('addressWeb');

    function handleSubmit(e){

        /*Llamar a preventDefault en cualquier momento durante la ejecución, cancela el evento, 
        lo que significa que cualquier acción por defecto que deba producirse como resultado 
        de este evento, no ocurrirá.*/

        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const email = $EMAIL.value;
        const web = $WEB.value;

        if(name==false || isValidText(name)==false){
            alert('El nombre debe ser un valor válido :'+
                '\n -Debe estar relleno'+
                '\n -Debe estar compuesto por 1 o 2 palabras');
        } else{
            if(surname==false || isValidText(surname)==false){
                alert('El apellido debe ser un valor válido :'+
                    '\n -Debe estar relleno'+
                    '\n -Debe estar compuesto por 1 o 2 palabras');
            } else{
                if(email==false || isValidEmail(email)==false){
                    alert('El correo debe ser un valor válido :'+
                        '\n -Debe estar relleno'+
                        '\n -Debe tener siguiente formato: xxxxxx@yyyyy.zzz');
                } else{
                    if(web==false || isValidWeb(web)==false){
                        alert('El web debe ser un valor válido :'+
                            '\n -Debe estar relleno'+
                            '\n -Debe tener siguiente formato: http://www.xxxx.yyy');
                    } else{
                        var regUsuario = {
                            nombre: name,
                            apellido: surname,
                            correo:email, 
                            web: web
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

    function isValidText(text){
        if (isNaN(text)){

            const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
            return validacion.test(text);

        }else{
            alert('Esto no es un nombre.')
        }
    }

    function isValidEmail(email){

        const validacion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        return validacion.test(email);
    }

    function isValidWeb(web){
        const validacion=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        return validacion.test(web);
    }


    $FORM.addEventListener('submit', handleSubmit);

