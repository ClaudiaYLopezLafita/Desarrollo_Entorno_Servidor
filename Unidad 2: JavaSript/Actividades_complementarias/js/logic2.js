const $FORM = document.getElementById("formulario");
const $TITULO = document.getElementById("titulo");
const $DESCRIPCION = document.getElementById("descripcion");
const $NINOS = document.getElementById("kids");
const $FECHA = document.getElementById("fecha");
const $HORA = document.getElementById("hora");
const $ETIQUETAS = document.getElementById("etiquetas");
const $PASSWORD = document.getElementById("password");

/**
 * funcion que cambia el atributo disabled del campo etiqueta al marcar/desmarcad niños
 */
$NINOS.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      $ETIQUETAS.disabled = false;
    } else
    {
        $ETIQUETAS.disabled = true;
    }
})

function handleSubmit(e)
    {
        debugger
    e.preventDefault();

    const titulo = $TITULO.value;
    const descripcion = $DESCRIPCION.value;
    const ninos = $NINOS.value;
    const etiquetas = $ETIQUETAS.value;
    const fecha = $FECHA.value;
    const hora = $HORA.value;
    const password = $PASSWORD.value;

    if( titulo == ""){
        
        return error($TITULO," El titulo tiene que estar completo.")

    } else{

        if(descripcion==""){
            
            return error($DESCRIPCION, " La descripcion tiene que estar completo.");

        } else if(descripcion.length <= 50 || descripcion.length>= 400){

            return error($DESCRIPCION, " La descripcion tiene que tener una longitud de entre 50-400 caracteres.")

        } else{

            if(ninos=='off'){
               return error($NINOS, 'Las etiquetas no se puedes habilitar.');
            } 

            if (!$ETIQUETAS.disabled) { // si la etique no está deshabilitada (se puede escribir)

                if (!isValidEtiqueta(etiquetas)) {

                   return error($ETIQUETAS, "El campo etiquetas no cumple las condiciones de las etiquetas");
                }
            }

                if(fecha==""){
                    return error($FECHA, 'La fecha tiene que estar rellena');
                } else if (isValidFecha(fecha)==false){
                    return error($FECHA, 'La fecha tiene que ser mayor a la acutual');
                } else{
                    if(hora==""){
                        return error($HORA, 'La hora tiene que estar rellena');
                    } else{
                        if(password==""){
                            return error($PASSWORD, 'La contraseña tiene que estar rellena');
                            // ejemplo password: 123€garra23.AbC
                        } else if(isValidPassword(password)==false){
                            return error($PASSWORD, 'La contraseña NO sigue el patron');
                        } else{
                            var regUsuario = {
                                titulo:titulo,
                                descripcion: descripcion,
                                etiqueta: etiquetas,
                                fecha: fecha,
                                hora:hora,
                                password: password
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



function isValidEtiqueta(etiquetas){
    const validacion = /^(\w{3,100})([,]\w{3,100})$/;

    return validacion.test(etiquetas);
}

function isValidFecha(fecha){
    if (fecha < new Date()){
        return false;
    }
}

function isValidPassword(password){
     const validacion = /^\d{3}[€]\w{4,14}[2-6]{2}[^a-zA-Z0-9][A-Z][a-z][A-Z]$/;

     return validacion.test(password);
}

/*
el elemento es $[nombre]
*/
function error(elemento, mensaje) {

    document.getElementById("errores").innerHTML = mensaje;

// método establece el foco en el elemento especificado, si se puede enfocar
    elemento.focus();

     return false;
}


$FORM.addEventListener('submit', handleSubmit);