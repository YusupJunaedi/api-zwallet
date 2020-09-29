const formResponse = require("../Helpers/forms/formResponse");
const historyModel = require("../Models/history");

const historyController = {
  addDataHistory: (req, res) => {
    historyModel
      .addDataHistory(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getDataHistory: (req, res) => {
    historyModel
      .getDataHistory(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historyController;
