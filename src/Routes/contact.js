const express = require("express");

// const uploadImg = require("../Helpers/Middlewares/upload");

const contactController = require("../Controllers/contact");

const contactRouter = express.Router();

contactRouter.get("/:id", contactController.getDataContact);

module.exports = contactRouter;
