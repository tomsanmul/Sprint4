//NIVELL 2: Inclou un middleware que afegeix la capçalera Cache-control: no-cache. 
//Habilita CORS en les respostes mitjançant Express"


const addCacheControl = (req, res, next) => {

    res.header("Cache-control", "no-cache");
    next();

};

module.exports = addCacheControl;