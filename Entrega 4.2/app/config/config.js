const express = require('express');
const app = express();

app.use(express.json());

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)


module.exports = app;