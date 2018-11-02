var express = require('express');

var app = express();

//Cargar Archivos de Rutas

//Middlewares

//CORS

//Rutas
app.get('/hola', (req, res) => {
    res.status(200).send(
        'Hola Mundo en NodeJS'
    );
});


//Exportar
module.exports = app;