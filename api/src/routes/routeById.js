const getPokeById = require('../controllers/getPokeById');
const { Router } = require('express');
const pokemonIdRouter = Router();


pokemonIdRouter.get('/:id', getPokeById)



module.exports = pokemonIdRouter;