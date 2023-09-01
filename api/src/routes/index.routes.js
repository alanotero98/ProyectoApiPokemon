const { Router } = require('express');
const pokemonRouter = require('./routePokemon');
const routeType = require('./routeType');
const pokemonIdRouter = require('./routeById');
// const pokemonByName = require('./routeByName');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



// Configurar las rutas

router.use("/pokemons", pokemonRouter)
router.use("/types", routeType)
router.use("/", pokemonIdRouter)
// router.use("/name", pokemonByName)



// Obtener detalles de un pokémon por ID



module.exports = router;
