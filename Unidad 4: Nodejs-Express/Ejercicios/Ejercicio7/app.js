const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));
const baseDatos = require('./public/js/baseDatos.js');

//
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/usuario', (req, res) => {
    let usuario = {
        dni: req.body.formUsuarioDNI,
        nombre: req.body.formUsuarioNombre,
        apellido: req.body.formUsuarioApellido,
        password: req.body.formUsuarioPassword, 
        email: req.body.formUsuarioEmail,
        telefono: req.body.formUsuarioTelefono
    };

    baseDatos.validarUsuario(usuario.dni).then((mensajeResultante) => {
        res.render('usuariocreado.ejs',{
            dniUsuarioReg: usuario.dni, 
            nombreUsuarioReg: usuario.nombre,
            apellUsuarioReg: usuario.apellido,
            passwordUsuarioReg: usuario.password,
            emailUsuarioReg: usuario.email, 
            tlflUsuarioReg: usuario.telefono 
        });
    }).catch((mensajeResultante) => {
        res.render('usuarioerror.ejs',{mensajeError:mensajeResultante});
    });
});    

app.listen(port,() => console.log(`server listening on port ${port}`));