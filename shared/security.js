var jwt = require("jsonwebtoken");

const createJWT = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });

module.exports = { createJWT };
