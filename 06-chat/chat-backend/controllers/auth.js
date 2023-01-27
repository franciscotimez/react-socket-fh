const bcryptjs = require("bcryptjs");
const { response, request } = require("express");
const { generarJWT } = require("../helpers/jwt");
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

    // Generar JWT
    const token = await generarJWT(newUser.uid);

    res.json({
      ok: true,
      user: newUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const loginUsuario = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const userDB = await Usuario.findOne({ email });

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario o Password Incorrecto.",
      });
    }

    // Validar el Password
    const validPassword = bcryptjs.compareSync(password, userDB.password);

    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario o Password Incorrecto.",
      });
    }

    // Generar JWT
    const token = await generarJWT(userDB._id);

    res.json({
      ok: true,
      user: userDB,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const renovarToken = async (req = request, res = response) => {
  const uid = req.uid;

  // Generar nuevo JWT
  const token = await generarJWT(uid);

  // Obtener user by uid
  const user = await Usuario.findById(uid);

  res.json({
    ok: true,
    user,
    token,
  });
};
module.exports = { crearUsuario, loginUsuario, renovarToken };
