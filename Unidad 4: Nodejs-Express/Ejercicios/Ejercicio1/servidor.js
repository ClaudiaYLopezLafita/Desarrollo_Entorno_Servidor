// requerimos, solicitamos el módulo express
const express = require('express');
// creamos una aplicacion express
const app = express();
// Function added with use() for a specific route
app.use(express.static(__dirname + '/public'));

app.listen(8080,() => console.log('Server listening on port 8080'));

/**
 * Las dos primeras líneas require()(importar) el módulo express y crear una aplicación Express . 
 * Este objeto, que tradicionalmente se denomina app, tiene métodos para enrutar solicitudes HTTP, 
 * configurar middleware, representar vistas HTML, registrar un motor de plantilla y modificar la 
 * configuración de la aplicación que controla cómo se comporta la aplicación (por ejemplo, 
 * el modo de entorno, si las definiciones de ruta distinguen entre mayúsculas y minúsculas, etc.)
 * 
 * You could then call use() on the Express application object to add the middleware to the stack:
 *  To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
 * the root argument specifices the root directory from wich to serv static assets información on the option argumenta
 * 
 */