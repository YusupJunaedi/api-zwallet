const express = require("express");

// const uploadImg = require("../Helpers/Middlewares/upload");

const userController = require("../Controllers/user");

const userRouter = express.Router();

userRouter.get("/:id", userController.getDataUser);

module.exports = userRouter;
