require('dotenv').config();

class Constants{
    mongodb(){
        return{
        pass: process.env.MONGO_PASS,
        user: process.env.MONGO_USER,
        name: process.env.MONGO_NAME
        }
    }
}

module.exports = Constants