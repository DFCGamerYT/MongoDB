var mongoose = require('mongoose');

var schema = mongoose.Schema;

var UsuarioSchema = Schema({
    id: any,
    nickname: String,
    password: String
}); 

module.exports = mongoose.model('usuario',UsuarioSchema);