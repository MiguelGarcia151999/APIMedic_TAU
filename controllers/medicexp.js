const { ExpMedicModel } = require('../models')
const ExpMedico  = require('../models/MongoDB/process/processexpMedico')
const expMedico = new ExpMedico();

class Medicexp {

    listarExpedientesMedicos(){
        return expMedico.listarExpedientesMedicos()
    }

    ListarExpedienteMedico(id){
        return expMedico.listarExpendienteMedico(id)
    }
}

/**
 *Todo Obtener un solo expediente medico
 */
const getExpMedico = (req, res) => {} 

/**
 *Todo Crear un expediente medico
 */
const createExpMedico = async (req, res) => {
    const { body } = req 
    console.log(body)
    const data = await ExpMedicModel.create(body)
    res.send({data})
}

/**
 *Todo Actualizar un expediente medico
 */
const updateExpMedico = (req, res) => {} 

/**
 *Todo Borrar un expediente medico
 */
const deleteExpMedico = (req, res) => {}

//module.exports = { getExpMedicos, getExpMedico, createExpMedico, updateExpMedico, deleteExpMedico }
module.exports = Medicexp;