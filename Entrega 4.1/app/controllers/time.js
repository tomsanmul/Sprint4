//Crea un endpoint /time que rebi per POST com a paràmetre un JSON amb el nom d'usuari/ària i retorni un objecte JSON 
//que contingui l'hora i data actual. Inclogui un middleware que afegeixi la capçalera Cache-control: no-cache. 
//Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, sigui mitjançant Express o mitjançant un altre middleware.

const time = (req, res) => {
        
        try {
            const {username} = req.body;
            const fechaHoy = Date.now();
            const hoy = new Date(fechaHoy);
                    res.json({
                        "Time": hoy.toLocaleTimeString(),
                        "Date": hoy.toLocaleDateString(),
                        "User": username
                    });

        } catch (err) {
            res.status(500).send(err);
        }

    }

module.exports = time;