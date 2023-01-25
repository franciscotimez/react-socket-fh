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
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();

// Crear nuevos usuarios
router.post(
  "/new",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearUsuario
);

// Login
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  loginUsuario
);

// Renovar Token
router.get("/renew", renovarToken);

module.exports = router;
