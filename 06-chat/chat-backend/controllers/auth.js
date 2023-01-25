const { response, request } = require("express");
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

    // todo: encryptar password

    // Guardar en BD
    const newUser = new Usuario(req.body);

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
