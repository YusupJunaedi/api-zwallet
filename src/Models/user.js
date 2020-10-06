const db = require("../Configs/dbMySql");

const authModel = {
  getDataUser: (id) => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT users.id_user, users.email, users.username, users.pin, users.image, data_user.amount, data_user.no_hp FROM users JOIN data_user ON users.id_user = data_user.user_id where users.id_user = ?";
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateUserImg: (body) => {
    const { id_user, image } = body;
    const queryString = "UPDATE users SET image= ? WHERE id_user = ?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [image, id_user], (err, data) => {
        if (!err) {
          resolve(image);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = authModel;
