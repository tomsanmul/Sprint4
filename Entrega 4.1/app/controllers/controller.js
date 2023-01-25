const app = require("../config/config.js");

class controllers {

    getUser(req, res) {
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

    };


    upload(req, res) {
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                //Use the name of the input field to retrieve the uploaded file
                let file = req.files.file;
                if (!file) {
                    res.status(500).send("The name of the Key must be 'file'.");
                } else {
                    if ((file.mimetype == "image/png") || (file.mimetype == "image/jpeg") || (file.mimetype == "image/gif")) {
                        //Use the mv() method to place the file in the upload directory
                        file.mv('./img/' + file.name);
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

            }
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    time(req, res) {

        //FALTA INCLOU-RE UN MIDDELWARE QUE AFEGEIXI LA CAPÇALERA Cache-control: no-cache. 
        //I també lo d'Habilitar CORS en les respostes mitjançant Express"
        
        //app.post('/time', cors(), async (req, res) => {
        //app.post('/time', async (req, res) => {
        
        try {
            const username  = req.body;
            console.log(username);
            
            if (req.body) {
                res.send({       
                    status: false,
                    message: 'No file JSON received'
                });
            } else {

                    const fechaHoy = Date.now();
                    const hoy = new Date(fechaHoy);

                    res.json({
                        "Time": hoy.toLocaleTimeString(),
                        "Date": hoy.toLocaleDateString(),
                        "User": username
                    });

            }
        } catch (err) {
            res.status(500).send(err);
        }

    }


    async getPokemon(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(500).send("You must provide an id parameter. Ex: ../pokemon/10");
            }
            const fetch = require("node-fetch");   
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemon = await response.json();
            res.json({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight
            });

        } catch (err) {
            res.status(500).send(err);
        }

    };


}


module.exports = controllers;