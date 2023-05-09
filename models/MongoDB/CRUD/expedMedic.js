
class expMedicoCRUD{

    constructor(connection) {
        this.connection = connection
    }

    getCollectionMedicExp(){
        return new Promise((resolve, reject) => {
            ExpMedicModel.find({})
                return resolve({data})
        })
    }
}

module.exports = expMedicoCRUD