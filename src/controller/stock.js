var model = require("../model/stock");
var misHelper = require("../helper/helper");
module.exports = {
  insertStock: (req, res) => {
    model
      .insertStock(req.body)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateStock: (req, res) => {
    model.updateStock(req.body).then((response) => {
      misHelper.response(res, response, 200);
    });
  },
  deleteStock: (req, res) => {
    model
      .deleteStock(req.params)
      .then((response) => {
        misHelper.response(res, response, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
