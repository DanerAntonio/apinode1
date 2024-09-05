const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Datos en línea');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar la base de datos');
    }
}

module.exports = {
    dbConnection
}