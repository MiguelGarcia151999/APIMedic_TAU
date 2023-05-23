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

router.post('/insertar', (req, res) => {
    let { body } = req

    if(Object.keys(body).length == 0) return response.send(res, response.requestValidation("Parametros no validos"))
    expMedic.insertarExpedienteMedico(body).then((result) => {
        response.send(res, result)
    }).catch((error) => {
        console.log(error)
        response.send(res, error)
    })
})

/*
router.post('/',createExpMedico)
router.get('/',updateExpMedico)
router.get('/',deleteExpMedico)
*/

module.exports = router