const { ExpMedicModel } = require('../../../models')
const Constants = require('../../Constants/index')
const ObjectMongoLog = new Constants().mongodb()
const Response = require('../../Constants/response')
const response = new Response()
class expMedicoCRUD{

    constructor(connection) {
        this.connection = connection
    }

    /*

    getCollectionMedicExp(){
        async function getAllDocuments() {
            try {
                const docs = await ExpMedicModel.find();
                resolve(docs)
            } catch (error) {
                console.log(error);
            }
        }
    }
}
*/
    getCollectionMedicExp(){
        return new Promise((resolve, reject) => {
            let db = this.connection.db(ObjectMongoLog.name)
            db.collection().find((error, result) => {
                if(error){
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }

}

module.exports = expMedicoCRUD