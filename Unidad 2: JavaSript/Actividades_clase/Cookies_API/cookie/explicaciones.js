/*
Modifica los formularios de los ejercicios anteriores de la siguiente manera:
    • Cada vez que el usuario trate de enviar el formulario y haya algún error, una variable
    contador (almacenada en una cookie) se incrementará.
    • El resultado del número de intentos se reflejará en un campo de texto que se
    encontrará al final del formulario.
    • Si el usuario sale del programa y vuelve a entrar, el campo de texto mostrará el
    número almacenado en la cookie.
    • Junto al campo de texto habrá un botón que, al pulsarlo, permitirá reiniciar el valor
    de la cookie a 0.
*/

// CHECK IF NAVIGATOR HAS ENABLED COOKIES
function enabledCookie(){
    navigator.cookieEnabled == true ? alert("Cookies activas") : alert("Cookies desactivadas");
}

// creacion de cookie general
function setCookie(cookieName, cookieValue){
    document.cookie = cookieName + "=" + cookieValue + ";";
}

// para obtener el valor de una cookie - 
function getCookie(cookieName){

    let nameEQ = cookieName + "=";
    let ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {

        let c = ca[i];

        while (c.charAt(0) === " ") {
            c = c.substring(1) // 
        }

        if (c.indexOf(nameEQ) === 0){ 
            return c.substring(nameEQ.length,c.length);
        }
    }
   return "";
}

// validacion de una cookie
function checkCookie() {
    let nombre = getCookie("nombre");
    let usuario = getCookie("usuario");

    if (nombre != "" && usuario != "") { // tenemos una cookie existente
        alert(`Hola ${usuario}. Tu nombre es ${nombre}.`);
    } else {
        // al no existir la creamos nosotros
        nombre = prompt("Indica tu nombre:", "");

        if (nombre != "" && nombre != null) {
            setCookie("nombre", nombre);
        }

        usuario = prompt("Indica tu usuario:", "");

        if (usuario != "" && usuario != null) {
            setCookie("usuario", usuario);
            alert("Refresca la página");
        }
    }
}
checkCookie();

// DELETE COOKIE
function deleteCookie() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

(confirm('¿quieres eliminar cookie?')) ? deleteCookie():null;

// actualizacion de una cookie
function updateNombre(){
    nombre = prompt('Indica nombre de nuevo');
    if (nombre!="" && nombre!=null){
        setCookie("nombre",nombre);
    }
}

// ver todas las cookies

function vewCookies(){
    alert(`Todas las cookies actuales: \n`+document.cookie);
    
}