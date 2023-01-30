const time = (req, res) => {

        //FALTA INCLOU-RE UN MIDDELWARE QUE AFEGEIXI LA CAPÇALERA Cache-control: no-cache. 
        //I també lo d'Habilitar CORS en les respostes mitjançant Express"
        
        //app.post('/time', cors(), async (req, res) => {
        //app.post('/time', async (req, res) => {
        
        try {
            const username  = req.body;
            
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

module.exports = time;