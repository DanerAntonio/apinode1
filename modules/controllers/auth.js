const Usuario = require('../modules/usuario'); // Corregido el nombre de la variable

// Importar librería
const bcryptjs = require('bcryptjs'); // Corregido el uso de comillas

// Función asincrónica
async function comparePassword(plainTextPassword, hash) { // Corregido el nombre de la función y parámetros
    const result = await bcrypt.compare(plainTextPassword, hash);
    return result;
}

const login = async (req, res) => {
    const { email, password } = req.body; // Corregido el nombre del parámetro
    const usuario = await Usuario.findOne({ email }); // Corregido el nombre de la variable y método

    try {
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            });
        }
        if (!usuario.activo) { // Añadido chequeo de usuario activo
            return res.status(400).json({
                msg: 'Usuario inactivo'
            });
        }

        const resultado = await comparePassword(password, usuario.password); // Corregido el nombre de la variable y parámetros
        if (!resultado) {
            return res.status(400).json({
                msg: 'El password es incorrecto'
            });
        } else {
            return res.status(200).json({
                msg: 'Login exitoso'
            });
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'Por favor contacte con el administrador'
        });
    }
};

module.exports = { // Corregido el nombre del objeto de exportación
    login
};
