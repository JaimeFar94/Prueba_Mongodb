const mongoose = require('mongoose');
const Usuario = require('./usuario');

const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/prueba_backend", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a la base de datos MongoDB');
    } catch (err) {
        console.error('Error de conexión:', err);
    }
};

module.exports = { connection, Usuario };
