const app = require("../config/config.js");

function getUser(req, res) {
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

function upload(req, res){
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field to retrieve the uploaded file
            let file = req.files.file;
            if ((file.mimetype == "image/png") || (file.mimetype == "image/jpeg") || (file.mimetype == "image/gif")) {
                //Use the mv() method to place the file in the upload directory (i.e. "uploads")
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
    } catch (err) {
        res.status(500).send(err);
    }

}




    module.exports = {
        getUser,
        upload
      }