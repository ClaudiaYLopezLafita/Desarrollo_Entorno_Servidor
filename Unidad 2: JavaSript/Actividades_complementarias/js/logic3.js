const $FORM = document.getElementById("formulario");
const $NOMBRE = document.getElementById("nombre");
const $MODELO= document.getElementById("modelo");
const $FECHA = document.getElementById("fecha");
const $CONSUMO = document.getElementById("consumo");
const $REFERENCIA = document.getElementById("referencia");
const $PASSWORD = document.getElementById("password");

function handleSubmit(e){

    e.preventDefault();

    const nombre = $NOMBRE.value;
    const modelo = $MODELO.value;
    const fecha = $FECHA.value;
    const consumo = $CONSUMO.value;
    const referencia = $REFERENCIA.value;
    const password = $PASSWORD.value;
    debugger
    if(nombre==''){

        error($NOMBRE,'El nombre NO puede estar vacio.');
        alert('EL nobre NO puede estar vacio.');

    } else{

        if(modelo==="0"){
            error($MODELO,'El tipo de modelo debe estar seleccionado.');
            alert('El tipo de modelo debe estar seleccionado.');

        } else{

            if(fecha==''){
                error($FECHA,'La fecha debe estar rellena. ');

                
            }else if (isValidFecha(fecha) == false ){   
                error($FECHA,'Con formato dd/mm/yyyy o dd-mm-yyyy');

            } else {

                if(consumo==""){
                    error($CONSUMO, 'EL consumo debe estar relleno');

                } else if(isValidConsumo(consumo)==false){
                    error($CONSUMO, 'El consumo solo puede tener los siguientes valores: A+++ | A++ | A+ | A | B | C | D');

                } else{

                    if(referencia==''){
                        error($REFERENCIA, 'La referencia tiene que estar completa');

                    }else if (isValidReferencia(referencia)==false){
                        error($REFERENCIA, 'La referencia tiene que seguir el siguiente patton: EJ. "UE55F8000AFXZ" ')

                    } else{
                        if(password==''){
                            error($PASSWORD, 'La contraseña no puede estar vacia');

                        } else if(isValidPassword(password)==false){
                            error($PASSWORD,'La contraseña tien que ser un patron: Ej. #xx[palabra].111')
                            // #abpasapalabra?379
                        } else{
                            var regUsuario = {
                                'nombre': nombre,
                                'modelo': modelo,
                                'fecha': fecha,
                                'consumo':consumo, 
                                'referencia': referencia,
                                'password': password,
                            }; 
                            console.log(regUsuario);
                            var newUser = JSON.stringify(regUsuario);
                            document.getElementById('newUser').innerHTML=newUser;
                            console.log(newUser)

                            // BORRAR ELEMENTOS DEL FORMULARIO

                             $NOMBRE.value = "";
                             $MODELO.value = '';
                             $FECHA.value = '';
                             $CONSUMO.value = '';
                             $REFERENCIA.value = '';
                             $PASSWORD.value = '';

                            // generacion de cookie tras validacion
                            document.getElementById('cookieRef').innerHTML = getCookie('ref');
                            setCookie('ref',getRandomIntInclusive(1000,2000),1);
                        }
                    }

                }

            } 

        }
    }
}

function isValidFecha(fecha){
        const validacion = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

     return validacion.test(fecha);
     debugger
}

function isValidConsumo(consumo){
    const validacion = /^([A]\+{0,3}|[BCD])$/;

    return validacion.test(consumo);
}

function isValidReferencia(referencia){

    const validacion = /^[A-Z]{2}\d{2}[F]( ([3-9]\d{2})|([1-7]\d{3})|([8]\d{3}))[A][F][X|Y|Z][A-Za-z]$/;
    
    return validacion.test(referencia);

}

function isValidPassword(password){
    const validacion = /^#[a-z]{2}\w{8,16}[^a-zA-Z0-9&][379]{3}$/;

    return validacion.test(password);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

/**
 * indica que error es lo que invalida un input
 * @param {*variable} campo 
 * @param {*String} mensaje 
 * @returns 
 */
function error(campo, mensaje) {

	document.getElementById("errores").innerHTML = mensaje;

	campo.className = "error";
	campo.focus();
	return false;
}

$FORM.addEventListener('submit', handleSubmit);


