
//Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).*/

const accesControl = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    next();

};

module.exports = accesControl;