const getPokemonsHandler = require('../Handlers/getPokemonsHandler');
const { Router } = require('express');
const postPokemon = require('../controllers/postPokemon');
const pokemonRouter = Router();



pokemonRouter.post('/', postPokemon)


pokemonRouter.get('/', getPokemonsHandler)



module.exports = pokemonRouter;

