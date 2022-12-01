

function getUser(req, res){
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


