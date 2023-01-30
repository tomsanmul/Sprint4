//Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus png, jpg o gif amb una petició POST 
//i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.

const upload = (req, res) => {
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

module.exports = upload;