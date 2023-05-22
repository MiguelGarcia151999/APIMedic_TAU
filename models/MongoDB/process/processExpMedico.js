
const Connection = require('../../../config/mongo');
const Response = require('../../Constants/response')
const response = new Response()
const expMedicoCRUD = require('../../MongoDB/CRUD/expedMedic')
const getCollectionMedicExp = require('../../MongoDB/CRUD/expedMedic')

class expedienteMedico {

    listarExpedientesMedicos() {
        return new Promise(async (resolve, reject) => {

            const connection = new Connection()
            let conexion = undefined

            try {
                conexion = await connection.dbConnect()
            } catch (error) {
                return reject(response.dataBase(error))
            }
            
            try {
                const expMedicCrud = new expMedicoCRUD(conexion)
                let result = await expMedicCrud.getCollectionMedicExp()

                resolve(response.success(result))
                conexion.close()
            } catch (error) {
                console.log(error)
                reject(response.processValidation(error))
            }
            
        })
    }

    listarExpendienteMedico(id){
        return new Promise(async(resolve, reject) => {

            const connection = new Connection()
            let conexion = undefined

            try {
                conexion = await connection.dbConnect()
            } catch (error) {
                return reject(response.dataBase(error))
            }

            try {
                const expMedicCrud = new expMedicoCRUD(conexion)
                let result = await expMedicCrud.getMedicExpById(id)

                resolve(response.success(result))
                conexion.close()
            } catch (error) {
                

            }

        })
    }
}

module.exports = expedienteMedico