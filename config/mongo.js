const mongoose = require("mongoose")
const {MongoClient} = require('mongodb');

//class Connection{
/*const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('**** CONEXION CORRECTA ****')
    }catch(error) {
        console.log('**** ERROR DE CONEXION ****', error.message);
    }
};*/
//}
/*
const dbConnect = async() => {
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.log('Error al conectarse a MongoDB:', err.message));
}
 

class Connection {

    dbConnect(){
        return new Promise((resolve, reject) => {
            const URI = process.env.DB_URI

            mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
            .then((client) => resolve(client)console.log('Conexión exitosa a MongoDB'))
            .catch(err => console.log('Error al conectarse a MongoDB:', err.message));
            
        })
    }
}
*/
class Connection {

    dbConnect(){
        return new Promise((resolve, reject) => {
            const URI = process.env.DB_URI
            console.log(URI);
            MongoClient.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((client) => {
                resolve(client);
                console.log('**** CONEXION SUCCESS ****');
            }).catch((error) => {
                console.log('**** ERROR DE CONEXION ****', error.message);
                console.log(error)
                reject(error)
            })
        })
    }
}

module.exports = Connection;