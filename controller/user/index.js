const prisma = require("../../shared/prisma");

const controller = {
  details: async (req, res) => {
    try {
      const found = await prisma.user.findFirst({
        where: {
          id: req.user.id,
        },
        select: {
          name: true,
          email: true,
        },
      });
      if (found) {
        res.status(200).send({ success: true, user: found });
      }
      res.status(403).send({ success: false, message: "Not authorized" });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message || "An error has occured",
      });
    }
  },
};

module.exports = controller;
