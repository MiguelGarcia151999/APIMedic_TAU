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

    insertarExpedienteMedico(body){
        return expMedico.insertarExpedienteMedico(body)
    }

    eliminarExpedienteMedico(id){
        return expMedico.eliminarExpedienteMedico(id)
    }

    actualizarExpedienteMedico(id, body){
        return expMedico.actualizarExpedienteMedico(id, body)
    }
}

module.exports = Medicexp;