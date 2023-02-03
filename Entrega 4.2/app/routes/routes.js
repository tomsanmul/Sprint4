const app = require("../config/config.js");


const createPlayer = require("../controllers/createPlayer.js");
const getPlayers = require("../controllers/getPlayers.js");
const throwPlay = require("../controllers/throwPlay.js");
const deleteThrows = require("../controllers/deleteThrows.js");
const getListofGames = require("../controllers/getListOfGames.js");
const getRanking = require("../controllers/getRanking.js");
const getLoser = require("../controllers/getLoser.js");
const getWinner = require("../controllers/getWinner.js");


app.post('/players', (req, res) => {    //crea un jugador/a.
    createPlayer(req, res);
});

app.put('/players/:id', (req, res) => {    //modifica el nom del jugador/a.
    createPlayer(req, res);
});

app.get('/players', (req, res) => {     //retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
    getPlayers(req, res);
});

app.post('/games/:id', (req, res) => {     //un jugador/a específic realitza una tirada.
    throwPlay(req, res);
});

app.delete('/games/:id', (req, res) => {   //elimina les tirades del jugador/a.
    deleteThrows(req, res);
});

app.get('/games/:id', (req, res) => {      //retorna el llistat de jugades per un jugador/a.
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


module.exports = app;