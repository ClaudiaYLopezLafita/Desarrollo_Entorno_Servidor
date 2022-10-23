
/**
 * funcion que crea una cooki con los parámetros deseados
 * @param {String} nombre 
 * @param {*String} valor 
 * @param {*numérico} expiracion 
 */
function set_cookie(nombre, valor, expiracion) {

	//asignacion de fecha .
	let d = new Date();
	d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);

	//asignacion de fecha expiracion y cambio a formato UTC
	expiracion = "expires=" + d.toUTCString();
	
	// creacion de cookie con parametros establecidos
	document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

/**
 * obtencion del nombre y valor de una cookie deseada
 * @param {String} nombre 
 * @returns String nombre=valor de la cookie
 */
function get_cookie(nombre) {
	let nom = nombre + "=";
	let array = document.cookie.split(";");
	for (let i = 0; i < array.length; i++) {
		let c = array[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(nombre) == 0) {
			return c.substring(nom.length, c.length);
		}
	}
	return "";
}
