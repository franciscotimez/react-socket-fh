/**
 * path:
 */

const { Router } = require("express");

const router = Router();

// Crear nuevos usuarios
router.post("/new", (req, res) => {
  res.json({
    ok: true,
    msg: 'new'
  });
});

// Login
router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: 'login'
  });
});

// Renovar Token
router.get("/renew", (req, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  });
});

module.exports = router;
