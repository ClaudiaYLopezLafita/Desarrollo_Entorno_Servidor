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
    let products=[];

    let listProduct = document.getElementById('carrito').querySelectorAll('li');
    listProduct.forEach((product)=>{
        let texto = product.getElementsByTagName('p')[0].innerText
        products.push(texto);
    })

    baseDatos.validarListaProductos(products).then((mensajeResultante) => {
        res.render('factura.ejs',{
            
        });
    }).catch((mensajeResultante) => {
        res.render('facturaError.ejs',{mensajeError: mensajeResultante});
    });
});    

//https://expressjs.com/en/starter/static-files.html
//https://www.youtube.com/watch?v=Pri0AHpLQA0 --> minuto 1:27:42



app.listen(port,() => console.log(`server listening on port ${port}`));