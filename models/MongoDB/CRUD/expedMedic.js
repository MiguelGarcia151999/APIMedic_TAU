const { ExpMedicModel } = require('../../../models')
const Constants = require('../../Constants/index')
const { mongodbtest } = require('../../Constants/index')
const Response = require('../../Constants/response')
const response = new Response()

class expMedicoCRUD{

    constructor(connection) {
        this.connection = connection
    }

    getCollectionMedicExp(){
        return new Promise((resolve, reject) => {
        try {
            const database = this.connection.db(mongodbtest.db); // Reemplaza con el nombre de tu base de datos
            const collection = database.collection(mongodbtest.collection); // Reemplaza con el nombre de tu colección
        
            const result = collection.find({}).toArray();
            resolve(result);
        }catch(error){
            reject(error)
        }
        })
    }

    getMedicExpById(id){
        return new Promise(async(resolve, reject) => {
            try {
                const database = this.connection.db(mongodbtest.db); // Reemplaza con el nombre de tu base de datos
                const collection = database.collection(mongodbtest.collection); // Reemplaza con el nombre de tu colección
                console.log(id);
                const result = await collection.findOne({ _id: id})

                resolve(result)            
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }
}

module.exports = expMedicoCRUD