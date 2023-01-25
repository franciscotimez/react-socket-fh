const bcryptjs = require("bcryptjs");
const { response, request } = require("express");
const usuario = require("../models/usuario");
const Usuario = require("../models/usuario");

const crearUsuario = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exists",
      });
    }

    const newUser = new Usuario(req.body);

    // Encryptar password
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await newUser.save();

    console.log(newUser);

    res.json({ newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
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
