//Crea una petició GET a l'endpoint /pokemon/{id} que rebi un número de Pokémon, faci una cerca al Pokémon API 
//i retorni el nom del Pokémon, la seva alçada i el seu pes.

const fetch = require("node-fetch"); 
const { options } = require("../config/config");

const getPokemon = async (req, res) => { 
    try {
        const id = req.params.id;
        if (!id) {
            res.status(500).send("You must provide an id parameter. Ex: ../pokemon/10");
        }  
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