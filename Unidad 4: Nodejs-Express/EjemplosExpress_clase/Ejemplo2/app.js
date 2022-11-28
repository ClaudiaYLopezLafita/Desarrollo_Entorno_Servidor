const express = require('express');
const app = express();
const port =  3000;

app.get('/', (req, res) => {
    res.send('Enhorabuena, estas conectado al servidor Express');
});

app.get('/ejemplojson', (req, res) => {
    res.send({
        nombre: 'Claudia',
        edad: 28,
        aficiones:['musica', 'senderismo', 'gatos']
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});