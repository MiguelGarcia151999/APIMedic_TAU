const express = require('express')
const Medicexp = require('../controllers/medicexp')
const expMedic = new Medicexp()
const Response = require('../models/Constants/response')
const response = new Response()
const { 
    getExpMedicos, getExpMedico,
    createExpMedico, updateExpMedico, deleteExpMedico
} = require('../controllers/medicexp')
const router = express.Router()

router.get('/', (req, res) => {
    expMedic.listarExpedientesMedicos().then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

router.get('/:id', (req, res) => {
    let { id } = req.headers

    if((id == undefined)) return response.send(res, response.requestValidation("Parametros indefinidos"));
    if((id == 0)) response.send(res, response.requestValidation("Parametros incorrectos"));

    expMedic.ListarExpedienteMedico(id).then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

router.post('/insert', (req, res) => {
    let body = req.body
    console.log(req.body)

    if(Object.keys(body).length == 0) return response.send(res, response.requestValidation("Parametros no validos"))
    expMedic.insertarExpedienteMedico(body).then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

router.delete('/delete', (req, res) => {
    let { id } = req.headers

    if((id == undefined)) return response.send(res, response.requestValidation("Parametros indefinidos"));
    if((id == 0)) response.send(res, response.requestValidation("Parametros incorrectos"));

    expMedic.eliminarExpedienteMedico(id).then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

router.put('/update', (req, res) => {
    let body  = req.body
    let { id } = req.headers

    if(Object.keys(body).length == 0) return response.send(res, response.requestValidation("Parametros no validos"))
    if((id == undefined)) return response.send(res, response.requestValidation("Parametros indefinidos"));
    if((id == 0)) response.send(res, response.requestValidation("Parametros incorrectos"));

    expMedic.actualizarExpedienteMedico(id, body).then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

module.exports = router