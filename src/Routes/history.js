const express = require("express");

// const uploadImg = require("../Helpers/Middlewares/upload");

const historyController = require("../Controllers/history");

const historyRouter = express.Router();

historyRouter.post("/", historyController.addDataHistory);
historyRouter.get("/:id", historyController.getDataHistory);

module.exports = historyRouter;
