const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtencion  = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtencion(file)
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${name}`))
    }
})


module.exports = router