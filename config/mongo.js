const {MongoClient} = require('mongodb');

class Connection {

    dbConnect(){
        return new Promise((resolve, reject) => {
            const URI = process.env.DB_URI
            MongoClient.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000}).then((client) => {
                resolve(client);
            }).catch((error) => {
                console.log('**** ERROR DE CONEXION ****', error.message);
                console.log(error)
                reject(error)
            })
        })
    }
}

module.exports = Connection;