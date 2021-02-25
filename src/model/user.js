const con = require("../db/db_connection");
const misHelper = require("../helper/helper");
module.exports = {
  getUser: (req, res) => {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM user", function (err, result) {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  insertUser: (req) => {
    const { username, password, email, number_phone, type } = req;
    return new Promise((resolve, reject) => {
      con.query(
        "INSERT INTO user SET ?",
        { username, password, email, number_phone, type },
        function (err, result) {
          if (err) {
            throw err;
          } else {
            console.log(result);
            resolve(result);
          }
        }
      );
    });
  },
  updateUser: (req) => {
    const { username, password, email, id, number_phone } = req;
    return new Promise((resolve, reject) => {
      con.query(
        `UPDATE user SET ? WHERE id=?`,
        [{ username, password, email, number_phone }, id],
        function (err, result) {
          if (err) {
            console.log(err);
            throw err;
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  deleteUser: (req) => {
    const { id } = req;
    return new Promise((resolve, reject) => {
      con.query("DELETE FROM `user` WHERE id=?", id, function (err, result) {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  },
  loginUser: (req) => {
    const { username, password, type } = req;
    return new Promise((resolve, reject) => {
      con.query(
        "SELECT * FROM `user` WHERE username=? && password=? && type=?",
        [username, password, type],
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
