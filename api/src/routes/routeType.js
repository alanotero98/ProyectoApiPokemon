const getTypes = require('../controllers/getTypes');
const { Router } = require('express');
const routeType = Router();


routeType.get('/', getTypes)



module.exports = routeType;