const fetch = require("node-fetch");   

const getPokemon = async (req, res) => { 
    try {
        const id = req.params.id;
        if (!id) {
            res.status(500).send("You must provide an id parameter. Ex: ../pokemon/10");
        }
        const fetch = require("node-fetch");   
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
        res.json({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight
        });

    } catch (err) {
        res.status(500).send(err);
    }

};

module.exports = getPokemon;