const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/auth');

// Definir la ruta correctamente usando 'router'
router.post('/login', login);

// Exportar correctamente el router
module.exports = router;
