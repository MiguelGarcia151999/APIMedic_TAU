const { ExpMedicModel } = require('../../../models')
class expMedicoCRUD{

    constructor(connection) {
        this.connection = connection
    }

    /*getCollectionMedicExp(){
        return new Promise((resolve, reject) => {
            let db = this.connection.db(process.env.DB_URI)
            ExpMedicModel.find({},(error, result) => {
                if (error) {
                    console.log(error);
                    return reject("error")
                }else{
                    resolve(result)
                }
            })
            
        })
    }*/

    getCollectionMedicExp(){
        async function getAllDocuments() {
            try {
                const docs = await ExpMedicModel.find({});
                resolve(docs)
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = expMedicoCRUD