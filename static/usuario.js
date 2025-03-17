const mongoose = require('mongoose')

//Esquema del Usuario

const DireccionesSchema = new mongoose.Schema({
    calle : {type: String, required: true},
    ciudad : {type: String, required: true},
    pais: {type: String, required: true},
    codigo_postal: {type: Number, required: true }
})

const UserSchema = new mongoose.Schema({
    nombre:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    edad: {type: Number},
    fecha_creacion: {type: Date, default: Date.now},
    direcciones: [DireccionesSchema]
})


module.exports = mongoose.model("Usuario",UserSchema)