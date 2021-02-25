const con = require("../db/db_connection");
module.exports = {
  getCart: (req) => {
    const { id_user } = req;
    console.log(id_user);
    const query =
      "SELECT cart.seller, product.price, cart.id,product.id AS id_product, user.username, product.product_name, product.image, product.adding_date, category.category_name, cart.quantity, cart.id_user, cart.id_seller, product.stock_product  FROM product INNER JOIN cart ON product.id=cart.id_product INNER JOIN category ON product.id_category=category.id INNER JOIN user ON user.id=cart.id_user WHERE cart.id_user=? ORDER BY  cart.id DESC";
    return new Promise((resolve, reject) => {
      con.query(query, id_user, function (err, res) {
        if (err) {
          throw err;
        } else {
          resolve(res);
        }
      });
    });
  },
  insertCart: (req) => {
    const query = "INSERT INTO cart SET ?";
    const { id_user, id_product, quantity, id_seller, seller } = req;
    return new Promise((resolve, reject) => {
      con.query(
        query,
        { id_user, id_product, quantity, id_seller, seller },
        function (err, res) {
          if (err) {
            throw err;
          } else {
            resolve(res);
          }
        }
      );
    });
  },
  updateCart: (req) => {
    const query = "UPDATE cart SET ? WHERE id=?";
    const { id_user, id_product, quantity, id, seller } = req;
    return new Promise((resolve, reject) => {
      con.query(
        query,
        [{ id_user, id_product, quantity, id, seller }, id],
        function (err, res) {
          if (err) {
            throw err;
          } else {
            resolve(res);
          }
        }
      );
    });
  },
  deleteCart: (params, body) => {
    const { id } = params;
    return new Promise((resolve, reject) => {
      if (Array.isArray(body)) {
        body.map((data, index) => {
          con.query(
            "DELETE FROM `cart` WHERE id=?",
            data.id,
            function (err, result) {
              if (err) {
                throw err;
              } else {
                resolve(result);
              }
            }
          );
        });
      } else {
        con.query("DELETE FROM `cart` WHERE id=?", id, function (err, result) {
          if (err) {
            throw err;
          } else {
            resolve(result);
          }
        });
      }
    });
  },
};
