// const axios = require("axios");
// const { Op } = require("sequelize");
// const { Pokemon } = require("../db");
// const URL = "https://pokeapi.co/api/v2/pokemon";

// const getPokemonsByName = async (req, res) => {
//     try {
//         const { name } = req.query;
//         if (!name) {
//             return res.status(400).send("Name parameter is required");
//         }

//         // Busca en la base de datos
//         const dbPokemons = await Pokemon.findAll({
//             where: {
//                 name: {
//                     [Op.iLike]: `%${name}%` // Busca independientemente de mayúsculas o minúsculas
//                 }
//             }
//         });

//         // Si no se encuentran en la base de datos, busca en la API
//         if (dbPokemons.length === 0) {
//             const { data } = await axios.get(`${URL}/${name.toLowerCase()}`);
//             const detailedPokemonInfo = data;

//             const pokemon = {
//                 id: detailedPokemonInfo.id,
//                 name: detailedPokemonInfo.name,
//                 image: detailedPokemonInfo.sprites.front_default,
//                 vida: detailedPokemonInfo.stats[0].base_stat,
//                 attack: detailedPokemonInfo.stats[1].base_stat,
//                 defense: detailedPokemonInfo.stats[2].base_stat,
//                 speed: detailedPokemonInfo.stats[5].base_stat,
//                 height: detailedPokemonInfo.height,
//                 weight: detailedPokemonInfo.weight,
//             };

//             return res.status(200).json([pokemon]);
//         }

//         return res.status(200).json(dbPokemons);
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// module.exports = getPokemonsByName;
