const db = require("../Configs/dbMySql");

const historyModel = {
  addDataHistory: (body) => {
    const { userIdTransfer, userIdSubscription, amount, balanceLeft } = body;
    const data1 = [userIdTransfer, userIdSubscription, "Transfer", amount];
    const data2 = [userIdSubscription, userIdTransfer, "Subscription", amount];
    return new Promise((resolve, reject) => {
      const queryString = `START transaction; INSERT INTO history(user_id, id_user_history, transaction, Amount) VALUES ?; INSERT INTO history(user_id, id_user_history, transaction, Amount) VALUES ?; UPDATE users SET amount= ? WHERE id_user= ?; COMMIT;`;

      db.query(
        queryString,
        [[data1], [data2], balanceLeft, userIdTransfer],
        (err, data) => {
          const res = {
            balanceLeft: balanceLeft,
            msg: "add history success",
          };
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  getDataHistory: (id) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT history.id_history, history.transaction, history.date, history.Amount, users.username, users.image FROM history
      JOIN users ON history.id_user_history = users.id_user WHERE history.user_id = ? ORDER BY date DESC`;
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

module.exports = historyModel;
