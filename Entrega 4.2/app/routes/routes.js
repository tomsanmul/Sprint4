const app = require("../config/config.js");
const getUser = require("../controllers/user.js");
const postUpload = require("../controllers/upload.js");
const postTime = require("../controllers/time.js");
const getPokemon = require("../controllers/pokemon.js");


POST /players: 
PUT /players/{id}: 
GET /players: 
POST /games/{id}: 
DELETE /games/{id}: 
GET /games/{id}: 
GET /ranking: 
GET /ranking/loser: 
GET /ranking/winner: 

app.post('/players', (req, res) => {    //crea un jugador/a.
    createPlayer(req, res);
});

app.put('/players/', (req, res) => {    //modifica el nom del jugador/a.
    createPlayer(req, res);
});

app.get('/players', (req, res) => {     //retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
    getPlayers(req, res);
});

app.post('/games/', (req, res) => {     //un jugador/a específic realitza una tirada.
    throwPlay(req, res);
});

app.delete('/games/', (req, res) => {   //elimina les tirades del jugador/a.
    deleteThrows(req, res);
});

app.get('/games/', (req, res) => {      //retorna el llistat de jugades per un jugador/a.
    getListofGames(req, res);
});

app.get('/ranking/', (req, res) => {    //retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.
    getRanking(req, res);
});

app.get('/ranking/loser', (req, res) => {   //retorna el jugador/a amb pitjor percentatge d’èxit.
    getLoser(req, res);
});

app.get('/ranking/winner', (req, res) => {  //retorna el jugador/a amb millor percentatge d’èxit.
    getWinner(req, res);
});