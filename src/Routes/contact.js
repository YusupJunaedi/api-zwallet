const express = require("express");

// const uploadImg = require("../Helpers/Middlewares/upload");

const contactController = require("../Controllers/contact");

const contactRouter = express.Router();

contactRouter.get("/quick", contactController.getQuickContact);
contactRouter.get("/:id", contactController.getDataContact);
contactRouter.get("/", contactController.searchDataContact);

module.exports = contactRouter;
