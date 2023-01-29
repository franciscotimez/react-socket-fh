const { request } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req = request, res, next) => {
  try {
    const token = req.header("x-token");

    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "Token missing.",
      });
    }

    const { uid } = jwt.verify(token, process.env.JWT_KEY);

    req.uid = uid;

    next();
  } catch (error) {
    // console.error(error);
    res.status(401).json({
      ok: false,
      msg: "Token invalido.",
    });
  }
};

module.exports = { validarJWT };
