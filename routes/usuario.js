const { Router } = require('express');
const router = Router();
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete, PromGet } = require('../modules/controllers/usuario');

router.get('/', usuarioGet);
router.get('/promedio', PromGet);
router.post('/', usuarioPost);
router.put('/', usuarioPut);
router.delete('/', usuarioDelete);

module.exports = router;
