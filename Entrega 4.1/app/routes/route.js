const app = require("../config/config.js");


app.get('/', (req, res) => {
    res.send({
        "Llista d'EndPoints:": "",
        "/user": "GET -> retorna un JSON amb el teu nom, edat i l'URL des d'on es fa la petició.",
        "/upload": "POST -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.",
        "/time": "POST -> rep per POST com a paràmetre un JSON amb el nom d'usuari i retorna un objecte JSON que conté l'hora i data actual. Inclou un middleware que afegeix la capçalera Cache-control: no-cache. Habilita CORS en les respostes mitjançant Express"
    })
});


app.get('/user', (req, res) => {
    const {
        getUser
     } = require('../controllers/controller.js');
    getUser(req,res);

});


app.post('/upload', async (req, res) => {

    const {
        upload
     } = require('../controllers/controller.js');
     upload(req, res);

});


app.post('/time', async (req, res) => {

    const {
        time
     } = require('../controllers/controller.js');
      time(req, res);

});




module.exports = app;
