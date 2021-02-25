const con = require("../db/db_connection");
const misHelper = require("../helper/helper");
const model = require("../model/category");
module.exports = {
  getCategory: (req, res) => {
    model
      .getCategory()
      .then((response) => {
        misHelper.response(res, response.length > 0 ? response : null, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
