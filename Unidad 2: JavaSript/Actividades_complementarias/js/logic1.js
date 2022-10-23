
//Registra un evento a un objeto en específico.
window.addEventListener("load", iniciar);
let intentos = 0;
 /*
 EL evento load hace referencia a la carga de dif partes de la página. 
  */

 /**
  * sa carga automaticamente cuando el documento ha sido cargo completamente
  */
function iniciar() {
	document.getElementById("nombre").addEventListener("focusout", chageUpperCase);
	document.getElementById("apellidos").addEventListener("focusout", chageUpperCase);
	document.getElementById("button_submit").addEventListener("click", isValidForm);
}

/**
 * cambiamos a mayusculas todo
 * @param {*} e 
 */
function chageUpperCase(e) {
    //método devuelve el valor de la cadena de llamada convertido a mayúsculas
	e.target.value = e.target.value.toLocaleUpperCase();
}

/**
 * funcion que valida los inputs
 * @param {*} e 
 * @returns boolean
 */
function isValidForm(e) {
	if (
		isValidName() &&
		isValidSurname() &&
		isValidAge() &&
		isValidNif() &&
		isValidEmail() &&
		isvalidProvincia() &&
		idValidFecha() &&
		isValidTelefono() &&
		isValidHora() &&
		confirm("¿Deseas enviar el formulario?")
	) {
		return true;
	} else {
        //creamos una cookie que nos cuantifique los intentos de rellenar un form
        //en caso de existir se modifica aumenta en 1 el nº de intentos
		set_cookie("intentos", ++intentos, 1);

        //obtenemos el valor de la cookie creada
		document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + get_cookie("intentos");
		e.preventDefault();
		return false;
	}
}

function isValidName() {
	
    let elemento = document.getElementById("nombre");
	
    if (elemento.value === "") {
		error(elemento, "El campo nombre no puede ser vacío");
		return false;
	}
	return true;
}

function isValidSurname() {
	let elemento = document.getElementById("apellidos");
	
    if (elemento.value === "") {
		return error(elemento, "El campo apellidos no puede ser vacío");
	}

	return true;
}

function isValidAge() {
	let elemento = document.getElementById("edad");
	
    if (elemento.value === "") { // comprobamos que esta completado
		
        return error(elemento, "El campo edad no puede ser vacío");
	
    } else if (isNaN(elemento.value)) { // comprobamnos que es numerico
		
        return error(elemento, "El campo edad tiene que ser numérico");
	
    } else if (elemento.value < 0 || elemento.value > 105) { // comprobamos que esta dentro del rango
		
        return error(elemento, "El campo edad tiene que estar entre 0 y 105");
	}
	return true;
}

function isValidNif() {

	let elemento = document.getElementById("nif");

	if (elemento.value === "") {
		//constructor crea un objeto de error. podemos usar un alert
        return error(elemento, "El campo nif no puede ser: " + elemento.value);
	
    } else if (/^\d{8}-[a-zA-Z]$/.test(elemento.value) == false) {
        
        
		return error(
			elemento,
			"El campo nif no tiene el formato adecuado. 11111111-X"
		);
	}
	return true;
}

function isValidEmail() {
	let elemento = document.getElementById("email");
	if (elemento.value === "") {
		return error(elemento, "El campo email no puede ser vacío");
	} else if (/^[^.\s]\w*.*@\w*[.]\w*$/.test(elemento.value) == false) {
		return error(elemento, "El campo email no tiene el formato adecuado");
	}
	return true;
}

function isvalidProvincia() {
	let elemento = document.getElementById("provincia");
	if (elemento.value === "0") {
		return error(elemento, "El campo provincias es obligatorio");
	}
	return true;
}

function idValidFecha() {
	let elemento = document.getElementById("fecha");
	if (elemento.value === "") {
		return error(elemento, "El campo fecha no puede ser vacío");
	} else if (/^\d{2}\/\d{2}\/\d{4}$/.test(elemento.value) == false) {
		return error(elemento, "El campo fecha no tiene el formato adecuado");
	}
	return true;
}

function isValidTelefono() {
	let elemento = document.getElementById("telefono");
	if (elemento.value === "") {
		return error(elemento, "El campo teléfono no puede ser vacío");
	} else if (/^\d{9}$/.test(elemento.value) == false) {
		return error(elemento, "El campo teléfono no tiene el formato adecuado");
	}
	return true;
}

function isValidHora() {
	let elemento = document.getElementById("hora");
	if (elemento.value === "") {
		return error(elemento, "El campo hora no puede ser vacío");
	} else if (/^\d{2}:\d{2}$/.test(elemento.value) == false) {
		return error(elemento, "El campo hora no tiene el formato adecuado");
	}
	return true;
}


function error(elemento, mensaje) {
	
    document.getElementById("errores").innerHTML = mensaje;
	
    // método establece el foco en el elemento especificado, si se puede enfocar
    elemento.focus();
	
    return false;
}