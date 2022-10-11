function registrarDatos() {

    const formmulario = document.getElementById('formulario').value;
    const dni = document.getElementById('dni').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const commit = document.getElementById('comentrario').value;
    const date = document.getElementById('hora').value;

    function handleSubmit(e) {

        e.preventDefault();

        if (dni == false || isValidDni(dni) == false) {
            debugger

            alert('Formato correcto: 99.999.999-X \n -Debe de estar relleno');
        }
        else {
            if (name == false || isValidName(name) == false) {

                alert('El nombre debe ser un valor válido :' +
                    '\n - Debe estar relleno' +
                    '\n - Debe estar compuesto por una o dos palabras');

            } else {
                if (phone == false || isValidPhone(phone) == false) {

                    alert('El teléfono tiene que tener un formato válido :' +
                        '\n- Debe estar relleno' +
                        '\n - Formato correcto: (+34) 954556817');

                } else {
                    if (commit == false || isValidCommit(commit) == false) {

                        alert('El comentario tiene que tener un formato válido: ' +
                            '\n - Debe estar relleno' +
                            '\n - Máximo 250 caracteres');

                    } else {
                        if (date == false || isValidDate(date) == false) {
                            alert('La hora tiene que tener un formato valido: ' +
                                '\n - Debe estar relleno' +
                                '\n - Formato hh:mm')
                        }
                    }
                }
            }
        }

        var regUsuario = {
            dni: dni, nombre: name, apellido: surname,
            telefono: phone, comentario: commit, hora: date
        }; aler(regUsuario);
        var newUser = JSON.stringify(regUsuario);
        aler(newUser);
    }


    function isValidDni(dni) {

        let validacion = /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/;

        return validacion.test(dni);

    }

    /*function isValidName(name){

        const validacion =
            /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;

        return validacion.test(name);
    }*/

    formmulario.addEventListener('submit', handleSubmit);
}