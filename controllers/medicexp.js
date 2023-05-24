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

    insertarExpedienteMedico(data){
        return expMedico.insertarExpedienteMedico(data)
    }

    eliminarExpedienteMedico(id){
        return expMedico.eliminarExpedienteMedico(id)
    }

    actualizarExpedienteMedico(){
        return expMedico.actualizarExpedienteMedico()
    }
}

module.exports = Medicexp;