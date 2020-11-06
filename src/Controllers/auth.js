require("dotenv").config();
const formResponse = require("../Helpers/forms/formResponse");
const authModel = require("../Models/auth");
const nodemailer = require("nodemailer");

const authController = {
  register: (req, res) => {
    authModel
      .postNewUser(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  login: (req, res) => {
    authModel
      .loginUser(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  checkPassword: (req, res) => {
    authModel
      .checkPassword(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  changePassword: (req, res) => {
    authModel
      .changePassword(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updatePin: (req, res) => {
    authModel
      .updatePin(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  checkOTP: (req, res) => {
    authModel
      .checkOTP(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  sendEmail: (req, res) => {
    authModel
      .sendEmail(req.body)
      .then((data) => {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_EMAIL,
          },
        });

        var mailOptions = {
          from: process.env.EMAIL,
          to: "yusup.junaedi97@gmail.com",
          subject: "OTP Reset Password",
          text: `Code OTP ${data.code}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
