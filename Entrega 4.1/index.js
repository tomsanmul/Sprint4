const express = require('express');
const app = express();
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(fileUpload({
    createParentPath: true
}));

app.get('/', (req, res) => {  
    res.send(`Llistat d'enpoints:<br>/user -> retorna un json amb el teu nom, edat i l'URL des d'on es fa la petició.<br>/upload -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.`);
});


app.get('/user', (req, res) => {  
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = app.get('port');
    const URL = `${protocol}://${host}:${port}${url}`
       
    res.json(
        {
            "Nom": "Tomas",
            "Edat": "44",
            "URL": URL 
        }
    );
})


app.post('/upload', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field to retrieve the uploaded file
            let file = req.files.file;
            
            //Use the mv() method to place the file in the upload directory (i.e. "uploads")
            file.mv('./files/' + file.name);

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
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});