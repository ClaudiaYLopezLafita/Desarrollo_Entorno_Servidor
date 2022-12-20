const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));
const baseDatos = require('./public/js/baseDatos.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('pages/index.ejs');
});

app.post('/cobrar', (req, res) => {
    let navbar = document.getElementById("carrito").querySelectorAll('li');
    let listProducts=[];

    navbar.forEach((item, index) => {
        
    });
    //obtener los elementos del form carrito
    baseDatos.validarListaProductos(usuario.dni).then((mensajeResultante) => {
        res.render('factura.ejs',{
            //imprimir los elementos en pantalla
        });
    }).catch((mensajeResultante) => {
        res.render('facturaError.ejs',{mensajeError: mensajeResultante});
    });
});    

//https://expressjs.com/en/starter/static-files.html


app.listen(port,() => console.log(`server listening on port ${port}`));