const express = require("express");
const userController = require("../../controller/user");
const { verifyToken } = require("../../middleware");
const router = express.Router();

router.post("/", verifyToken, userController.details);

module.exports = router;
