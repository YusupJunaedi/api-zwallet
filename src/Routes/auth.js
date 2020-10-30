const express = require("express");

// const menusController = require("../Controllers/menus");
// const uploadImg = require("../Helpers/Middlewares/upload");

const authController = require("../Controllers/auth");

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.patch("/setpin", authController.updatePin);
authRouter.post("/checkPassword", authController.checkPassword);
authRouter.patch("/changePassword", authController.changePassword);
authRouter.post("/sendEmail", authController.sendEmail);
authRouter.post("/checkOTP", authController.checkOTP);

module.exports = authRouter;
