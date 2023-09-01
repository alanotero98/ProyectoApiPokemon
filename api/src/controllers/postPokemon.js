const { Pokemon, Type } = require('../db');

// Ruta POST para crear un pokémon y relacionarlo con tipos
const postPokemon = async (req, res) => {
    try {
        const { name, types, life, attack,image, defense, speed, height, weight } = req.body;

        // Crea el pokémon en la base de datos
        const createdPokemon = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            image,
            speed,
            height,
            weight,
        });

        // Busca los tipos por nombre en la base de datos
        const foundTypes = await Type.findAll({
            where: {
                name: types,
            },
        });

        // Asocia los tipos al pokémon creado
        await createdPokemon.addTypes(foundTypes);

        return res.status(201).json(createdPokemon);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = postPokemon;