const express = require("express")
const poke = express.Router()
const {getAllPokemon} = require("../query/poke.js")

poke.get("/", async (req,res) => {
    const allPokemon = await getAllPokemon()
    res.status(200).json(allPokemon)
})


module.exports = poke