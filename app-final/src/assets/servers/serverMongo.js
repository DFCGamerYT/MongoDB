var conexion = require('./connection');
var app = require('./app');

var port = 3000;

app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto:'+port);
});