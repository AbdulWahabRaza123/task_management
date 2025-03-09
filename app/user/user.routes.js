const express = require("express");
const { validateSignup, validateSignin } = require("./user.validators");
const router = express.Router();
const userController = require("./user.controller");
const authenticateToken = require("../../middlewares/authentication/user-auth");
router.post("/signup", validateSignup, userController.createUser);
router.post("/signin", validateSignin, userController.signinUser);
router.get("/getByEmail", authenticateToken, userController.getUserByEmail);

module.exports = router;
