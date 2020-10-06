const formResponse = require("../Helpers/forms/formResponse");
const userModel = require("../Models/user");

const authController = {
  getDataUser: (req, res) => {
    userModel
      .getDataUser(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateUserImg: (req, res) => {
    userModel
      .updateUserImg(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
