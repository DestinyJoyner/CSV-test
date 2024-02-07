const db = require("../db/dbConfig.js")


const getAllPokemon = async (name) => {
    let allPokemon
    console.log(name)
    try {
        if(name){
            allPokemon = await db.any("SELECT * FROM pokemon WHERE name LIKE $1", `%${name}%`)
        }
        else {
            allPokemon = await db.any("SELECT * FROM pokemon")
        }
         console.log(allPokemon)
        return allPokemon
        
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllPokemon
}