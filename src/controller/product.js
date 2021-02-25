var model = require("../model/product");
var misHelper = require("../helper/helper");
module.exports = {
  getAllProduct: (request, response) => {
    model.getProduct(request.query).then((res) => {
      misHelper.response(response, res, 200);
    });
  },
  InsertProduct: (request, response) => {
    const image = request.file
      ? "http://localhost:3200/upload/" + request.file.originalname
      : "-";
    model.insertProduct({ ...request.body, image }).then((res) => {
      response.status(200).json({
        status: "success",
        message: "insert data success",
      });
    });
  },
  updateProduct: (req, res) => {
    const image = req.file
      ? "http://localhost:3200/upload/" + req.file.originalname
      : req.body.image
      ? req.body.image
      : "-";
    model.updateProduct({ ...req.body, image }).then((response) => {
      misHelper.response(res, response, 200);
    });
  },
  deleteUser: (req, res) => {
    model.deleteProduct(req.params).then((response) => {
      misHelper.response(res, response, 200);
    });
  },
  getProductBySeller: (req, res) => {
    // SELECT * FROM `product` WHERE product.id_user = 2
    model
      .getProductBySeller(req.body)
      .then((response) => {
        misHelper.response(res, response.length > 0 ? response : null, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
