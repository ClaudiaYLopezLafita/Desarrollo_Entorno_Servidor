var http = require('http'); // importamos el modulo http;
//creamos un servidor con una funcion con dos parámetros:
// req la petición y res la respuesta. 
const server = http.createServer(
    function(req,res){
        //escribimos la cabecere de la petición con el código estado 200,
        // página satisfactoria y el tipo de contenido 'text/plain'
        res.writeHead(200,{'content.type':'text/plain'});
        //enviamos hola mundo
        res.end('Hola Mundo!! Primer Server');
    }
);
// indicamos el puerto por el que se escucha
server.listen(8000);
console.log('Servidor ejecutandose en el puerto 80000');

/**
 * response.writeHead --> propiedad incorporada del módulo 'http' que envía un encabezado de respuesta a la solicitud.
 *                         El código de estado es un código de estado HTTP de 3 dígitos , como 404. El último argumento, 
 *                          los encabezados, son los encabezados de respuesta.
 * 
 * response.end() -->  es una interfaz de programación que se usa para enviar la señal al servidor de que se ha ennviado 
 *                      todo el encabezado. 
 * 
 */