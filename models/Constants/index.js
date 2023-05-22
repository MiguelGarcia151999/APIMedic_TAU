require('dotenv').config();

    let mongodb = {
        pass: process.env.MONGO_PASS,
        user: process.env.MONGO_USER,
        name: process.env.MONGO_NAME
    }

    let mongodbtest = {
            db: process.env.MONGO_NAME,
            collection: process.env.MONGO_COLLECTION
    }

module.exports = { mongodb, mongodbtest }     