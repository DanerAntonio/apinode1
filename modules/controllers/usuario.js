// Importamos la función response desde el módulo express
const { response } = require('express');

// Importa la librería bcrypt para el cifrado y comparación de contraseñas
const bcrypt = require('bcryptjs');

// Importar el modelo de usuario desde el módulo
const Usuario = require('../usuario');

// Controlador para la solicitud GET a la ruta de usuarios
const usuarioGet = async (req, res = response) => {
    try {
        const usuarios = await Usuario.find();
        res.json({ usuarios });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener usuarios' });
    }
};

// Controlador para la solicitud GET de promedio de usuarios
const PromGet = async (req, res = response) => {
    try {
        const usuarios = await Usuario.find();
        res.json({
            msg: 'Promedio de usuarios',
            usuarios
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener el promedio de usuarios' });
    }
};

const usuarioPost = async (req, res = response) => {
    const { nombre, email, password, rol, estado } = req.body;
    let msg = '';

    try {
        // Encripta la contraseña antes de guardarla en la BD
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Crea un nuevo usuario
        const usuario = new Usuario({ nombre, email, password: hashedPassword, rol, estado });

        // Guarda el usuario en la base de datos
        await usuario.save();
        msg = 'Usuario registrado';
    } catch (error) {
        if (error.name === 'ValidationError') {
            msg = Object.values(error.errors).map(val => val.message).join(', ');
        } else {
            msg = 'Error al registrar el usuario';
        }
    }

    res.json({ msg });
};

const usuarioPut = async (req, res = response) => {
    const { email, nombre, rol } = req.body;

    try {
        const usuario = await Usuario.findOneAndUpdate(
            { email },
            { nombre, rol },
            { new: true }
        );
        res.json({
            msg: 'Usuario modificado',
            usuario
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al modificar el usuario' });
    }
};

const usuarioDelete = async (req, res = response) => {
    const { email } = req.body;

    try {
        const usuario = await Usuario.findOneAndDelete({ email });
        res.json({
            msg: 'Usuario eliminado',
            usuario
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    usuarioGet,
    PromGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
};
