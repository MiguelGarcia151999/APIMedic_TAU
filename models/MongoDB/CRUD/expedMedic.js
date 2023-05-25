const { mongodbtest } = require('../../Constants/index')
const Response = require('../../Constants/response')
const { ObjectId } = require('mongodb');
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

                const result = await collection.find({ _id: new ObjectId(id)}).toArray();
                resolve(result)            

            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }

    insertMedicExp(body){
        return new Promise(async(resolve, reject) => {
            try {
                const database = this.connection.db(mongodbtest.db); // Reemplaza con el nombre de tu base de datos
                const collection = database.collection(mongodbtest.collection); // Reemplaza con el nombre de tu colección

                const result = await collection.insertOne(body)
                console.log(`Registro insertado con el ID: ${result.insertedId}`);

                resolve(result)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }

    deleteMedicExp(id){
        return new Promise(async(resolve, reject) => {
            try {
                let arreglo = []
                const database = this.connection.db(mongodbtest.db); // Reemplaza con el nombre de tu base de datos
                const collection = database.collection(mongodbtest.collection); // Reemplaza con el nombre de tu colección

                const result = await collection.deleteOne({ _id: new ObjectId(id)});
                let countDelete = result.deletedCount
                if(result.deletedCount >= 1){
                    console.log(`Registro eliminado: ${result.deletedCount} documento(s) eliminado(s)`);
                    arreglo.push({
                        estado: `Elemento con el _id: ${id}, eliminado exitosamente`,
                        deleteCount: countDelete
                    })
                }else{
                    console.log(`Registro no eliminado: ${result.deletedCount} documento(s) no eliminado(s)`);
                    arreglo.push({
                        estado: `Elemento con el _id: ${id}, no fue eliminado exitosamente`,
                        deleteCount: countDelete
                    })
                }
                resolve(arreglo)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }

    updateMedicExp(id, body){
        return new Promise(async(resolve, reject) => {
            try {
                const database = this.connection.db(mongodbtest.db); // Reemplaza con el nombre de tu base de datos
                const collection = database.collection(mongodbtest.collection); // Reemplaza con el nombre de tu colección

                const result = await collection.updateOne(
                    { _id: new ObjectId(id) }, // Filtro para encontrar el registro por su _id
                    { $set: body } // Nuevos datos a actualizar
                );
                resolve(result)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }
}

module.exports = expMedicoCRUD