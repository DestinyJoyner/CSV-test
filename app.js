const express = require("express")
const cors = require("cors")
const app = express()

const movieController = require("./controllers/movieController.js")
app.use(express.json())
app.use(cors())
app.use("/movies", movieController)



app.get("/", (req,res) => {
    res.status(200).send("Welcome to test server")
})


module.exports = app