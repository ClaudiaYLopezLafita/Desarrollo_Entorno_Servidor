const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));

const baseDatos = require('./public/baseDatos.js');

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/usuario', (req, res) => {
    let usuario = {
        nombre: req.body.formUsuarioNombre,
        password: req.body.formUsuarioPassword,
        email: req.body.formUsuarioEmail
    };

    baseDatos.validarUsuario(usuario.nombre).then((mensajeResultante) => {
        res.render('usuariocreado.ejs',{nombreUsuarioReg: usuario.nombre,
        passUsuarioReg: usuario.password, emailUsuarioReg: usuario.email});
        debugger
    }).catch((mensajeResultante) => {
        res.render('usuarioerror.ejs',{mensajeError:mensajeResultante});
    });
});    

app.listen(3000, () => console.log('Express server listening on port 3000!'));