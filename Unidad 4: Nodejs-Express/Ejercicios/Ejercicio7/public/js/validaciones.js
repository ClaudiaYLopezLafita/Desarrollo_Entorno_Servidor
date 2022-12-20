function validar(){
    const dni = document.getElementById("dni").value;
const name = document.getElementById("fname").value;
const surname = document.getElementById("lname").value;
const password = document.getElementById("password").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

function hadleSubmit(e) {

    e.preventDefault();
    debugger
    (isValidDNI(dni) == false || dni == false) ? alert("DNI incorrecto") : console.log("");
    (isValidNombre(name) == false || name == false) ? alert("Formato nombre incorrecto") : console.log("");
    (isValidApellido(surname) == false || surname == false) ? alert("Formato apellido incorrecto") : console.log("");
    (isValidContrasena(password) == false || password == false) ? alert("Formato contraseña incorrecto") : console.log("");
    (isValidEmail(email) == false || email == false) ? alert("Formato email incorrecto") : console.log("");
    (isValidTelefono(phone) == false || phone == false) ? alert("Formato telefono incorrecto") : console.log("");

    function isValidDNI(dni) {
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

    function isValidNombre(name) {
        const validacion = /^(([a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+))$/
        validacion.test(name);
    }

    function isValidApellido(surname) {
        const validacion = /^(([a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+))$/
        validacion.test(surname);
    }

    function isValidContrasena(password) {
        const validacion = /^\w{8,10}$/
        validacion.test(password);
    }

    function isValidEmail(email) {
        const validacion = /^[a-zA-Z]{3}\@[a-zA-Z]{3}\.[a-zA-Z]{3}$/
        validacion.test(email);
    }

    function isValidTelefono(phone) {
        const validacion =  /^\(\+\d{2,3}\)\s\d{9}$/
        validacion.test(phone);
    }
}
}