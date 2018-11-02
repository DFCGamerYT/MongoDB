var mongoose = require('mongoose');
//sudo sysctl fs.inotify.max_user_watches=524288
mongoose.Promise = global.Promise;
var URL = 'mongodb://localhost:27017/appfinal'
mongoose.connect(URL)
    .then(() => {
        console.log('Conexion a la base de datos establecida satisfactoriamente...');
    })
    .catch(err => console.log(err));

module.exports = mongoose;