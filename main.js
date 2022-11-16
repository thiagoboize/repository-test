const dotenv = require("dotenv")
dotenv.config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 21193;

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log("server running")
})