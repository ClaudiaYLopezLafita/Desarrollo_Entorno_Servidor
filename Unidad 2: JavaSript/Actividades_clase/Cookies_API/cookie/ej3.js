/*
Modifica el formulario del ejercicio Form2 anterior de forma que cuando se rellene el
formulario correctamente y se guarden los datos en un objeto y obtengan su json, también
guarde en una cookie los siguientes datos de registro, durante 1 día:
    ● usuario = nombre + apellido
    ● email = email
*/

function enabledCookie(){
    navigator.cookieEnabled == true ? alert("Cookies activas") : alert("Cookies desactivadas");
}

// funcion generica de creacion
function setCookie(cookieName, cookieValue, exdays){
    let d = new Date (); // Se extrae la fecha actual
    //Se le suman los días indicados por parámetro
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString(); 
    document.cookie = cookieName + "=" + cookieValue + ";"+ expires+";";
}




