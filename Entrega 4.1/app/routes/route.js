const express = require('express');
const fileUpload = require('express-fileupload');
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


app.post('/upload', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field to retrieve the uploaded file
            let file = req.files.file;
            if ((file.mimetype == "image/png") || (file.mimetype == "image/jpeg") || (file.mimetype == "image/gif")) {
                //Use the mv() method to place the file in the upload directory (i.e. "uploads")
                file.mv('./Entrega 4.1/img/' + file.name);
                //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: file.name,
                        mimetype: file.mimetype,
                        size: file.size
                    }
                });

            } else {
                res.send({
                    status: false,
                    message: 'The uploaded file is not a png/jpeg/gif image'
                });
            }

        }
    } catch (err) {
        res.status(500).send(err);
    }
});


app.post('/time', cors(), async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file JSON received'
            });
        } else {
            let file = req.files.file;
            if (file.mimetype == "application/json") {

                const fechaHoy = Date.now();
                const hoy = new Date(fechaHoy);
                let contingutfitxer = JSON.parse(file.data.toString('ascii'));

                res.json({
                    "Date": hoy.toLocaleDateString(),
                    "Time": hoy.toLocaleTimeString(),
                    "User": contingutfitxer.user,
                    "Nom" : contingutfitxer.nom
                });

            } else {
                res.send({
                    status: false,
                    message: 'The uploaded file is not a JSON application'
                });
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = {
    pruebas
};
