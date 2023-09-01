const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";
const {Type} = require('../db')


const getTypes = async (req, res) => {

    try {
        const getTypesDB = await Type.findAll();
        if(getTypesDB.length === 0){
            const {data} = await axios.get(`${URL}?limit=100`);
            const typesAPI = data.results.map((type, index) => ({id: index + 1, name: type.name}))
            const typeDB = await Type.bulkCreate(typesAPI)
            res.status(200).json(typeDB)
        }
        else{
            res.status(200).json(getTypesDB);
        }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

    
}

module.exports = getTypes;