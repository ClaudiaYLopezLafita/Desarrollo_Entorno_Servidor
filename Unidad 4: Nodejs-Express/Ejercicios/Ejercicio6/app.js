const express = require('express');
// const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true}));
// app.use(express.static(path.join(__dirname, '/public',)));

const baseDatos = require('./public/baseDatos.js');

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});


app.post('/usuario', (req, res) => {
    let usuario = {
        dni: req.body.formUsuarioDNI,
        nombre: req.body.formUsuarioNombre,
        apellido: req.body.formUsuarioApellido,
        telefono: req.body.formUsuarioTelefono,
        comentario: req.body.formUsuarioComentario,
        hora: req.body.formUsuarioHora
    };

    // validation.handleSubmit();

    baseDatos.validarUsuario(usuario.dni).then((mensajeResultante) => {
        res.render('usuariocreado.ejs',{
            dniUsuarioReg: usuario.dni, 
            nombreUsuarioReg: usuario.nombre,
            apellUsuarioReg: usuario.apellido, 
            tlflUsuarioReg: usuario.telefono, 
            commentUsuarioReg: usuario.comentario,
            horaUsuarioReg: usuario.hora});
    }).catch((mensajeResultante) => {
        res.render('usuarioerror.ejs',{mensajeError:mensajeResultante});
    });
});    

app.listen(3000, () => console.log('Express server listening on port 3000!'));