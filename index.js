require('dotenv').config()
const express = require("express")
const cors = require("cors")
const Connection = require('./config/mongo');
const morgan = require("morgan");
const helmet = require("helmet");
const app = express()

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(helmet());

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080

//* Invocando las rutas
app.use('/api',require('./server'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)