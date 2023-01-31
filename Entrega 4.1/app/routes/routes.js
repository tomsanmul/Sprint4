const app = require("../config/config.js");
const getUser = require("../controllers/user.js");
const postUpload = require("../controllers/upload.js");
const postTime = require("../controllers/time.js");
const getPokemon = require("../controllers/pokemon.js");

//Middllewares para el POST /time
const mdlwCacheControl = require("../middlewares/mdlwCacheControl.js"); //Inclou un middleware que afegeixi la capçalera Cache-control: no-cache.
const mdlAccessControl = require("../middlewares/mdlwAcessControl.js"); //Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).",
const cors = require('cors');

app.get('/user', (req, res) => {
    getUser(req, res);
});

app.post('/upload', (req, res) => {
    postUpload( req, res);
});

app.post('/time', cors(), mdlwCacheControl, mdlAccessControl, (req, res) => {
    postTime( req, res);
});

app.get('/pokemon/:id', async (req, res) => {
    await getPokemon(req, res);
});


app.get('/', (req, res) => {
    res.send({
        "Llista d'EndPoints:" : "",
        "/user": "GET -> retorna un JSON amb el teu nom, edat i l'URL des d'on es fa la petició.",
        "/upload": "POST -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.",
        "/time": "POST -> rep per POST com a paràmetre un JSON amb el nom d'usuari i retorna un objecte JSON que conté l'hora i data actual. Inclou un middleware que afegeix la capçalera Cache-control: no-cache.Habilita CORS en les respostes mitjançant Express. Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).",
        "/pokemon/xx": "GET -> on 'xx' es un ID numéric que li pasem i fa una cerca a la <Pokémon API>, i retorna el nom del Pokémon, la seva alçada i el seu pes.",
    })
});


module.exports = app;