const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokeById = async(req, res) => {
    try{
        const id = req.params.id;
        const { data } = await axios.get(`${URL}/${id}`);
        
        if(data){
            const pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.other.home.front_default !== null
            ? data.sprites.other.home.front_default
            : data.sprites.other["official-artwork"].front_default,
                types: data.types.map(type => type.type.name)
            };
            return res.status(200).json(pokemon);
        }
        return res.status(404).send("Not Found");

    }catch(error){
        res.status(500).send(error.mesasage);
    }
}


module.exports = getPokeById;