const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({
    createParentPath: true  //Automatically creates the directory path specified in .mv(filePathName)
}));

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)


module.exports = app;