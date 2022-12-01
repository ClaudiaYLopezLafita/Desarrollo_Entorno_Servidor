const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/animales', (req, res) => {
    let animalesFav = req.body.variableEnviada;
    res.render('tuAnimal.ejs',{ animalParaEnviarWeb: animalesFav});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});