const { ExpMedicModel } = require('../../../models')
class expMedicoCRUD{

    constructor(connection) {
        this.connection = connection
    }

    getCollectionMedicExp(){
        return new Promise((resolve, reject) => {
            ExpMedicModel.find({})
            if (error) {
                console.log(error);
                return reject("error")
            }
            resolve({data})
        })
    }
}

module.exports = expMedicoCRUD