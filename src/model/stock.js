var con = require("../db/db_connection");

module.exports = {
  insertStock: (req) => {
    return new Promise((resolve, reject) => {
      con.query("INSERT INTO stock SET ?", req, function (err, result) {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  },
  updateStock: (req) => {
    return new Promise((resolve, reject) => {
      con.query(
        "UPDATE stock SET ? WHERE id_product=?",
        [req, req.id_product],
        function (err, result) {
          if (err) {
            throw err;
          } else resolve(result);
        }
      );
    });
  },
  deleteStock: (req) => {
    return new Promise((resolve, reject) => {
      con.query(
        "DELETE FROM stock WHERE id_product=?",
        req.id_product,
        function (err, result) {
          if (err) {
            throw err;
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};
