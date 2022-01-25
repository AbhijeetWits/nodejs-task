const prisma = require("../../shared/prisma");
const { createJWT } = require("../../shared/security");

const controller = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) throw new Error("Insufficient arguments");
    try {
      const found = await prisma.user.findFirst({
        where: {
          email,
          password,
        },
      });
      if (found) {
        const jwt = createJWT({ id: found.id, email: found.email });
        res.status(200).send({ success: true, jwt });
      }
      res.status(400).send({ success: false, message: "Not authorized" });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message || "An error has occured",
      });
    }
  },
  signUp: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      if (!(name && email && password))
        throw new Error("Insufficient variables");

      await prisma.user.create({
        data: req.body,
      });
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message || "User couldn't be created",
      });
    }
  },
};

module.exports = controller;
