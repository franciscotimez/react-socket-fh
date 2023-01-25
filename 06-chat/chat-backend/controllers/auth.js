const { response, request } = require("express");

const crearUsuario = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

const loginUsuario = async (req = request, res = response) => {
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
