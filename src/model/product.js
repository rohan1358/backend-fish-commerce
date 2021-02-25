const con = require("../db/db_connection.js");
function adding_date() {
  var d = new Date();
  const day = d.getDate().toString();
  const month = d.getMonth() + 1;
  const year = d.getFullYear().toString();
  const adding_dates = day + "-" + month + "-" + year;
  return adding_dates;
}
module.exports = {
  getProduct: (req) => {
    console.log(req);
    const searching = req.search
      ? "SELECT *, product.id AS id FROM `product` INNER JOIN `user` ON product.id_user=user.id WHERE product.product_name LIKE ? && product.stock_product > 1 "
      : "SELECT *, product.id AS id FROM `product` INNER JOIN `user` ON product.id_user=user.id WHERE product.stock_product > 1";
    return new Promise((resolve, reject) => {
      con.query(searching, req.search + "%", function (err, result) {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  insertProduct: (req) => {
    const query = "INSERT INTO product SET ?";
    const {
      product_name,
      id_category,
      id_user,
      image,
      description,
      price,
      stock_product,
    } = req;

    return new Promise((resolve, reject) => {
      con.query(
        query,
        {
          product_name,
          id_category,
          id_user,
          image,
          adding_date: adding_date(),
          description: description ? description : "-",
          price,
          stock_product,
        },
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
  updateProduct: (req) => {
    const {
      product_name,
      id_category,
      id_user,
      image,
      id,
      description,
      price,
      stock_product,
    } = req;

    const query = "UPDATE product SET ? WHERE id=?";
    return new Promise((resolve, reject) => {
      con.query(
        query,
        [
          {
            product_name,
            id_category,
            id_user,
            image,
            description,
            price,
            adding_date: adding_date(),
            stock_product,
          },
          id,
        ],
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
  deleteProduct: (req) => {
    const { id } = req;
    return new Promise((resolve, reject) => {
      con.query("DELETE FROM product WHERE id=?", id, function (err, result) {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  },
  getProductBySeller: (req) => {
    const { id_user, search } = req;
    const searching = search
      ? "SELECT *,product.id AS id_product, category.category_name FROM `product` INNER JOIN category ON product.id_category=category.id WHERE id_user=? &&  product.product_name LIKE ?"
      : "SELECT *,product.id AS id_product, category.category_name FROM `product` INNER JOIN category ON product.id_category=category.id WHERE id_user=?";
    return new Promise((resolve, reject) => {
      con.query(
        searching,
        [id_user, search ? search + "%" : ""],
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
};
