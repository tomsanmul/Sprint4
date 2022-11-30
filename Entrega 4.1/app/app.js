let express = require('express');
let bodyParser = require('body-parser');
 
let app = express();
 
// Importamos las rutas
var routes = require('./routes/route.js');



const user = require('./routes/route.js');
app.use('/user', user)

//Iniciando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});