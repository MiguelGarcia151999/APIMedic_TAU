const mongoose = require('mongoose')

const ExpMedicModel = new mongoose.Schema(
    {
        numExp:{
            type:Number,
            unique:true
        },
        nombre:{
            type:String
        },
        tipoSanguineo:{
            type:String
        },
        alergias:{
            type:String
        },
        operaciones:{
            type:String
        },
        enfCronicas:{
            type:String
        },
        equipBiomedico:{
            type:String
        },
        donante:{
            type:String
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('expmedic', ExpMedicModel)