

const {Router} = require('express');
const { obtenerChat } = require('../controllers/mensajes');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router()

router.get('/:de', validarJWT, obtenerChat)

module.exports = router;