// funcion generica de creacion
function setCookie(cookieName, cookieValue){
    document.cookie = cookieName + "=" + cookieValue + ";";
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

//funcion de validacion
function checkCookie(){
    var contError = getCookie('contErr');

    (contError !="" && contError!=null) ? setCookie("contErr",++contError) : setCookie("contErr",1);
   
    document.getElementById('contador').innerHTML='Nº de intentos: '+ getCookie('contErr');
}

// reseto del contador al pulsar boton
function resetCookie(){
    setCookie('contErr',0);
    document.getElementById('contador').innerHTML='Nº de intentos: '+ getCookie('contErr');
}