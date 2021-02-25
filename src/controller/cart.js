const con = require("../db/db_connection");
const misHelper = require("../helper/helper");
const model = require("../model/cart");

module.exports = {
  getCart: (req, res) => {
    model.getCart(req.body).then((response) => {
      misHelper.response(res, response.length === 0 ? null : response, 200);
    });
  },
  insertCart: (req, res) => {
    model.insertCart(req.body).then((response) => {
      misHelper.response(res, response, 200);
    });
  },
  updateCart: (req, res) => {
    model.updateCart(req.body).then((response) => {
      misHelper.response(res, response, 200);
    });
  },
  deleteCart: (req, res) => {
    model.deleteCart(req.params, req.body).then((result) => {
      misHelper.response(res, result, 200);
    });
  },
};
