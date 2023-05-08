const express = require('express')
const { 
    getExpMedicos, getExpMedico,
    createExpMedico, updateExpMedico, deleteExpMedico
} = require('../controllers/medicexp')
const router = express.Router()

//Todo http://localhost/medicexp GET, POST, DELETE UPDATE

router.get('/', getExpMedicos)
router.get('/id:',getExpMedico)
router.post('/',createExpMedico)
router.get('/',updateExpMedico)
router.get('/',deleteExpMedico)

module.exports = router