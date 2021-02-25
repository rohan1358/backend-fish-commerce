const model = require("../model/order");
const misHelper = require("../helper/helper");
module.exports = {
  insertOrder: (req, res) => {
    console.log(req.body);
    model
      .insertOrder(req.body)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getOrder: (req, res) => {
    model
      .getOrder(req.body)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateOrder: (req, res) => {
    model
      .updateOrder(req.body)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteOrder: (req, res) => {
    model
      .deleteOrder(req.params)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
