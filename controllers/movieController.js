const express = require("express")
const movies = express.Router()
const {getAllMovies} = require("../query/movies.js")

movies.get("/", async (req,res) => {
    const allMovies = await getAllMovies()
    res.status(200).json(allMovies)
})


module.exports = movies