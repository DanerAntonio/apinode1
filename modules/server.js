const express = require('express');
const { dbConnection } = require('../database/config'); // Asegúrate de que esta ruta es correcta
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.routes();
        this.connectionDb();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
    }

    async connectionDb() {
        await dbConnection();
    }
}

module.exports = Server;
