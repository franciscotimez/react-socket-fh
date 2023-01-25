const { response } = require("express");

const crearUsuario = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

const loginUsuario = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const renovarToken = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
module.exports = { crearUsuario, loginUsuario, renovarToken };
