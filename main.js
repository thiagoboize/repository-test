const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const express = require('express')

const app = express()
const PORT = process.env.PORT_APP || 21193;

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log("server running")
})

mongoose.connect('mongodb+srv://thiagoboize:VRpqfhbhAjj3Fn6v@finance-database.tjl8pvq.mongodb.net/test', {

})
    .then(() => {
        console.log("Conectado com o MongoDB");
    })
    .catch(err => console.log(err))