const app = require("../config/config.js");
const getUser = require("../controllers/user.js");
const postUpload = require("../controllers/upload.js");
const postTime = require("../controllers/time.js");
const getPokemon = require("../controllers/pokemon.js");

//Middllewares para el POST /time
const mdlwCacheControl = require("../middlewares/mdlwCacheControl.js"); //Inclou un middleware que afegeixi la capçalera Cache-control: no-cache.
const mdlAccessControl = require("../middlewares/mdlwAcessControl.js"); //Inclou un middleware que afegeixi la capçalera Access-Control-Allow-Origin
const cors = require('cors');


app.get('/user', (req, res) => {
    getUser(req, res);
});

app.post('/upload', (req, res) => {
    postUpload(req, res);
});

app.post('/time', cors(), mdlwCacheControl, mdlAccessControl, (req, res) => {
    postTime( req, res);
});

app.get('/pokemon/:id', async (req, res) => {
    await getPokemon(req, res);
});


module.exports = app;