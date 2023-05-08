require('dotenv').config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080

//* Invocando las rutas
app.use('/api',require('./routes'))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})

dbConnect()