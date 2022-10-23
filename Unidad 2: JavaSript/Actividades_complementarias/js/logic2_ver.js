

window.addEventListener("load", iniciar);
let fecha_y_hora = new Date();

function iniciar() {
	document.getElementById("enviar").addEventListener("click", validar);
	document.getElementById("kids").addEventListener("change", toggle_tags);
	document.getElementById("fecha").addEventListener("change", guardar_fecha_y_hora);
	document.getElementById("hora").addEventListener("change", guardar_fecha_y_hora);
}

function guardar_fecha_y_hora(e) {
	let elemento = e.target;
	if (elemento.value === "") {
		fecha_y_hora.setDate(elemento.value);
	}
	if (elemento.id === "fecha") {
		fecha_y_hora.setYear(elemento.value.split("-")[0]);
		fecha_y_hora.setMonth(elemento.value.split("-")[1] - 1);
		fecha_y_hora.setDate(elemento.value.split("-")[2]);
	} else {
		fecha_y_hora.setHours(elemento.value.split(":")[0], elemento.value.split(":")[1], 0);
	}
}

function toggle_tags(e) {
	let kids = e.target;
	let elemento = document.getElementById("etiquetas");
	if (kids.checked) {
		elemento.disabled = false;
	} else {
		elemento.disabled = true;
	}
}

function validar(e) {
	console.log(document.getElementById("fecha").value);
	if (
		validar_titulo() &&
		validar_descripcion() &&
		validar_etiquetas() &&
		validar_fecha() &&
		validar_hora() &&
		validar_password(e) &&
		confirm("Pulsa aceptar si deseas enviar el formulario")
	) {
		return true;
	} else {
		e.preventDefault();
		return false;
	}
}

function validar_fecha() {
	let elemento = document.getElementById("fecha");
	if (elemento.value === "") {
		return error(elemento, "El campo fecha no puede ser vacío");
	}

	return correcto(elemento);
}

function validar_hora() {
	let elemento = document.getElementById("hora");
	if (elemento.value === "") {
		return error(elemento, "El campo hora no puede ser vacío");
	}

	return correcto(elemento);
}

function validar_titulo() {
	let elemento = document.getElementById("titulo");
	if (elemento.value === "") {
		return error(elemento, "El campo título no puede ser vacío");
	}

	return correcto(elemento);
}

function validar_descripcion() {
	let elemento = document.getElementById("descripcion");
	if (elemento.value === "") {
		return error(elemento, "El campo descripción no puede ser vacío");
	}
	return correcto(elemento);
}

function validar_etiquetas() {
	let elemento = document.getElementById("etiquetas");
	if (!elemento.disabled) {
		if (elemento.value.length < 3 || elemento.value.length > 500) {
			return error(elemento, "El campo etiquetas no cumple el rango");
		} else if (/^(\w{3,100})([,]\w{3,100})$/.test(elemento.value) == true) {
			return error(elemento, "El campo etiquetas no cumple las condiciones de las etiquetas");
		}
	}
	return correcto(elemento);
}

function validar_password(e) {
	e.preventDefault();
	let elemento = document.getElementById("password");
	if (elemento.value === "" || !/^\d{3}[€]\w{4,14}[2-6]{2}[^a-zA-Z0-9][A-Z][a-z][A-Z]$/.test(elemento.value)) {
		return error(elemento, "El campo password no cumple las reglas");
	}
	return correcto(elemento);
}

function error(elemento, mensaje) {
	let errores = document.getElementById("errores");
	errores.innerHTML = mensaje;
	elemento.className = "error";
	elemento.focus();
	return false;
}

function correcto(elemento) {
	elemento.className = "correcto";
	return true;
}