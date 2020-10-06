const express = require("express");

const uploadImg = require("../Helpers/Middlewares/upload");

const userController = require("../Controllers/user");

const userRouter = express.Router();

userRouter.get("/:id", userController.getDataUser);
userRouter.patch(
  "/updateImg",
  uploadImg.singleUpload,
  userController.updateUserImg
);

module.exports = userRouter;
