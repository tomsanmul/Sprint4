const app = require("../config/config.js"); 

const getListOfGames = (req, res) => {
        try {
            res.json({
                "Joc": "Prova"
            });
        } catch (err) {
            res.status(500).send(err);
        }

    }

module.exports = getListOfGames;