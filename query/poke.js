const db = require("../db/dbConfig.js")


const getAllPokemon = async () => {
    try {
        const allPokemon = await db.any("SELECT * FROM pokemon ")
        return allPokemon
        
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllPokemon
}