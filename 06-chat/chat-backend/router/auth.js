/**
 * path: /api/login
 */

const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  renovarToken,
} = require("../controllers/auth");

const router = Router();

// Crear nuevos usuarios
router.post("/new", crearUsuario);

// Login
router.post("/", loginUsuario);

// Renovar Token
router.get("/renew", renovarToken);

module.exports = router;
