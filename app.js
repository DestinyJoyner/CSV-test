const express = require("express")
const cors = require("cors")
const app = express()

const movieController = require("./controllers/movieController.js")
const pokeController = require("./controllers/pokeController.js")

app.use(express.json())
app.use(cors())
app.use("/movies", movieController)
app.use("/pokemon", pokeController)



app.get("/", (req,res) => {
    res.status(200).send("Welcome to test server")
})


module.exports = app