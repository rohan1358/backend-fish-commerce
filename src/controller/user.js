const model = require("../model/user");
const misHelper = require("../helper/helper");

module.exports = {
  getUser: (req, res) => {
    model.getUser().then((result) => {
      misHelper.response(res, result, 200);
    });
  },
  insertUser: (req, res) => {
    model.insertUser(req.body).then((result) => {
      misHelper.response(res, result, 200);
    });
  },
  updateUser: (req, res) => {
    model.updateUser(req.body).then((result) => {
      misHelper.response(res, result, 200);
    });
  },
  deleteUser: (req, res) => {
    model.deleteUser(req.params).then((result) => {
      misHelper.response(res, result, 200);
    });
  },
  loginUser: (req, res) => {
    model.loginUser(req.body).then((result) => {
      misHelper.response(res, result.length > 0 ? result[0] : null, 200);
    });
  },
};
