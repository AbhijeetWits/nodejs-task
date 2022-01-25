const express = require("express");
const authController = require("../../controller/auth");
const router = express.Router();

router.post("/login", authController.login);
router.post("/sign-up", authController.signUp);

module.exports = router;
