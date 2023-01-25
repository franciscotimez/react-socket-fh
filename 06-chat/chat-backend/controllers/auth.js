const { response, request } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

const loginUsuario = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  const { body } = req;

  res.json({
    ok: true,
    msg: "login",
    ...body,
  });
};

const renovarToken = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
module.exports = { crearUsuario, loginUsuario, renovarToken };
