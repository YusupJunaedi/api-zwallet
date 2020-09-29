const express = require("express");

const authRouter = require("./auth");
const userRouter = require("./user");
const contactRouter = require("./contact");
const historyRouter = require("./history");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/contact", contactRouter);
indexRouter.use("/history", historyRouter);

module.exports = indexRouter;
