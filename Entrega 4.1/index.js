const { response } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)


app.get('/', (req, res) => {  
    res.send(`Llistat d'enpoints:\n/user -> retorna un json amb el teu nom, edat i l'URL des d'on es fa la petició.\n/upload -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.`);
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

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});