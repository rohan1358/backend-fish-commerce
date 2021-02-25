const con = require("../db/db_connection.js");
module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM `category`", function (err, result) {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  },
};
