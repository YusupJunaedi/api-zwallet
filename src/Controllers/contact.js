const formResponse = require("../Helpers/forms/formResponse");
const contactModel = require("../Models/contact");

const contactController = {
  getDataContact: (req, res) => {
    contactModel
      .getDataContact(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = contactController;
