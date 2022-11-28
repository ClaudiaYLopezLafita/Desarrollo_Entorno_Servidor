const { application } = require('express');
var express = require('express');

var app = express();

app.get('/', function(req, res){
        res.end('Hola mundo con Express!!');
    }
);

app.get('/:clodo',function(req,res){
    res.end('Hola '+req.params.clodo+' con Express!!');
});

app.listen(3000, function () {
    console.log('Express server listening on port 3000');
});