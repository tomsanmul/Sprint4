const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(fileUpload({
    createParentPath: true
}));


// ENDPOINTS: 

app.get('/', (req, res) => {
    res.send(`Llistat d'enpoints:<br>/user -> retorna un json amb el teu nom, edat i l'URL des d'on es fa la petició.<br>/upload -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.`);
});


app.get('/user', (req, res) => {
    try {
        const protocol = req.protocol;
        const host = req.hostname;
        const url = req.originalUrl;
        const port = app.get('port');
        const URL = `${protocol}://${host}:${port}${url}`

        res.json({
            "Nom": "Tomas",
            "Edat": "44",
            "URL": URL
        });
    } catch (err) {
        res.status(500).send(err);
    }

});




//Iniciando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});