const postPokemon = require('../controllers/postPokemon');
const { Router } = require('express');
const pokemonCreateRouter = Router();


pokemonCreateRouter.post('/', postPokemon)



module.exports = pokemonCreateRouter;