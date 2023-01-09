if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    } else {
    console.log('You are on the server')
}

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
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
debugger
app.post('/cobrar', (req, res) => {
    let products=[

    ];

    res.render('pages/facturarError.ejs',{mensajeError: document.getElementById('carrito')});
    
    // baseDatos.validarListaProductos(products).then((mensajeResultante) => {
    //     res.render('pages/factura.ejs',{
            
    //     });
    // }).catch((mensajeResultante) => {
    //         res.render('pages/facturarError.ejs',{mensajeError: 'mensajeResultante'});
    // });
});    
//https://stackdiary.com/guides/referenceerror-document-is-not-defined/
//https://expressjs.com/en/starter/static-files.html
//https://www.youtube.com/watch?v=Pri0AHpLQA0 --> minuto 1:27:42



app.listen(port,() => console.log(`server listening on port ${port}`));