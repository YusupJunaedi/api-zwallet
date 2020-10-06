const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMySql");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, [body.email], (err, data) => {
        if (data.length) {
          reject({ msg: "account is ready" });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password, email } = body;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const newBody = {
                ...body,
                password: hashedPassword,
                image: "http://192.168.43.116:8000/images/user.png",
              };
              const queryString = "INSERT INTO users SET ?";
              db.query(queryString, newBody, (err, data) => {
                if (!err) {
                  const payload = {
                    newBody,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: "6h",
                  });
                  const id_user = data.insertId;
                  const msg = "Register Success";
                  resolve({ msg, token, id_user });
                  // resolve(data);
                } else {
                  reject(err);
                }
              });
            });
          });
        }
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM users WHERE email = ?";
      db.query(queryString, [body.email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (!data.length) {
          reject("User Not Found");
        } else {
          bcrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const { email } = body;
              const {
                id_user,
                password,
                username,
                image,
                pin,
                no_hp,
                amount,
              } = data[0];
              const payload = {
                email,
                password,
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "6h",
              });
              const msg = "Login Success";
              resolve({
                msg,
                token,
                id_user,
                username,
                image,
                pin,
                no_hp,
                amount,
                email,
              });
            }
            if (!result) {
              reject({ msg: "Wrong Password" });
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
  checkPassword: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM users WHERE email = ?";
      db.query(queryString, [body.email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (!data.length) {
          reject("User Not Found");
        } else {
          bcrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const passwordUser = true;
              resolve({
                passwordUser: passwordUser,
              });
            }
            if (!result) {
              reject({ passwordUser: false });
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
  changePassword: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, [body.email], (err, data) => {
        if (data.length) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password, email } = body;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const queryString =
                "UPDATE users SET password= ? WHERE email = ?";
              db.query(queryString, [hashedPassword, email], (err, data) => {
                if (!err) {
                  resolve({ msg: "change password success" });
                } else {
                  reject(err);
                }
              });
            });
          });
        } else {
          reject(err);
        }
      });
    });
  },
  updatePin: (body) => {
    const { pin, id_user } = body;
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE users SET pin=? WHERE id_user =?";
      db.query(queryString, [pin, id_user], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = authModel;
