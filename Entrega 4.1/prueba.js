const express = require('express');
const app = express();
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');


let dades = require("fitxer.json")

let file = req.files.file;