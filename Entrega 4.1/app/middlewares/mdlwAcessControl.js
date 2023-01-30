//Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized 
//si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).


const accesControl = (req, res, next) => {
    const {username, password} = req.query;
    //const password = req.params.password;
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({message: 'Falta el encabezado de autorización.'});
    } else {
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [user, pass] = credentials.split(':');
        if (user === username && pass === password) {
            next();
        } else {
            return res.status(401).json({message: 'Credenciales no válidas'});
        }
    }
};
    


module.exports = accesControl;