const app = require("../config/config.js");
const auth = require("../middlewares/middleware.js");
const controllers = require("../controllers/controller.js");

let controller = new controllers();

app.get('/user', (req, res) => {
    controller.getUser(req, res);
});

app.post('/upload', async (req, res) => {
    controller.upload(req, res);
});

app.post('/time', async (req, res) => {
    controller.time( req, res);
});

app.get('/pokemon/:id', async (req, res) => {
    await controller.getPokemon(req, res);
});

module.exports = app;