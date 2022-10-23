/**
 * funcion que genera un cookie con los valores pasados por parametros
 * @param {String} cookieName 
 * @param {Number} cookieValue 
 * @param {Number} exdays 
 */
function setCookie(cookieName, cookieValue, exdays){
    let d = new Date (); // Se extrae la fecha actual
    //Se le suman los días indicados por parámetro
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString(); 
    document.cookie = cookieName + "=" + cookieValue + ";"+ expires+";";
}


// funcion para obtener el valor de una cookie
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

