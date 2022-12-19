const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));
const baseDatos = require('./static/js/baseDatos.js');

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('pages/index.ejs');
});

// app.post('/usuario', (req, res) => {
    //https://expressjs.com/en/starter/static-files.html
// });    

app.listen(port,() => console.log(`server listening on port ${port}`));