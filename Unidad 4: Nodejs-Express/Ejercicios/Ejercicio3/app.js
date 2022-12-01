const express = require('express');
const app = express();
const portServidor = 3000;

app.set('view engine', 'ejs'); //indica que renderizaremos con el motor de plantillas ejs

app.get('/', (req, res) => {
    res.send('Esto es un texto plano devuelto al usuario con SEND');
});

app.get('/:user/:age', (req, res) => {
    let userName = req.params.user;
    let cantidad = userName.length;
    let ageUser = req.params.age;
    let condicion = (ageUser >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
    res.render('index.ejs', {userName: userName, cantidad: cantidad, ageUser:ageUser ,condicion: condicion});
});

app.listen(portServidor, () => {
    console.log('Servidor escuchando por el puerto 3000');
});
