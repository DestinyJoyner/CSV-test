const db = require("../db/dbConfig.js")


const getAllPokemon = async (name) => {
    let allPokemon
    
    try {
        if(name){
            allPokemon = await db.any("SELECT * FROM pokemon WHERE name LIKE $1", `%${name}%`)
        }
        else {
            allPokemon = await db.any("SELECT * FROM pokemon ")
        }
         
        return allPokemon
        
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllPokemon
}