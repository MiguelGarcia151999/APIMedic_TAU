const express = require('express')
const Medicexp = require('../controllers/medicexp')
const Response = require('../models/Constants/response')
const expMedic = new Medicexp()
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
        response.send(res, error)
    })
})/*
router.get('/',getExpMedicos)
router.get('/id:',getExpMedico)
router.post('/',createExpMedico)
router.get('/',updateExpMedico)
router.get('/',deleteExpMedico)*/

module.exports = router