const app = require("../config/config.js");
const getUser = require("../controllers/user.js");
const getPokemon = require("../controllers/pokemon.js");
const postUpload = require("../controllers/upload.js");
const postTime = require("../controllers/time.js");


app.get('/user', (req, res) => {
    getUser(req, res);
});

app.post('/upload', async (req, res) => {
    postUpload(req, res);
});

app.post('/time', async (req, res) => {
    postTime( req, res);
});

app.get('/pokemon/:id', async (req, res) => {
    await getPokemon(req, res);
});


module.exports = app;