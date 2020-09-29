const db = require("../Configs/dbMySql");

const contactModel = {
  getDataContact: (id) => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT id_user as id_contact, username as name, no_hp, image FROM `users` WHERE id_user != ? order by username";
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = contactModel;
