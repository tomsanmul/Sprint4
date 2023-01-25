
// Importamos las rutas
const app = require("./routes/route.js");

//Iniciando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});