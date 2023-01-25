/**
 * path: /api/login
 */

const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  renovarToken,
} = require("../controllers/auth");

const router = Router();

// Crear nuevos usuarios
router.post("/new", crearUsuario);

// Login
router.post("/", [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'El password es obligatorio').not().isEmpty()
], loginUsuario);

// Renovar Token
router.get("/renew", renovarToken);

module.exports = router;
