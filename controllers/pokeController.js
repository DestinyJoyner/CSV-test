const express = require("express")
const poke = express.Router()
const {getAllPokemon} = require("../query/poke.js")

poke.get("/", async (req,res) => {
    let allPokemon
    const {name} = req.query
    console.log(name)
    if(name){
        allPokemon = await getAllPokemon(name)
    }
    else{
         allPokemon = await getAllPokemon()
    }
    
    res.status(200).json(allPokemon)
})




module.exports = poke