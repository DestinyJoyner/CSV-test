const db = require("../db/dbConfig.js")


const getAllMovies = async () => {
    try {
        const allMovies = await db.any("SELECT * FROM imdb ")
        return allMovies
        
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllMovies
}