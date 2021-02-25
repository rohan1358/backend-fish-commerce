const con = require("../db/db_connection");
function order_date() {
  var d = new Date();
  const day = d.getDate().toString();
  const month = d.getMonth() + 1;
  const year = d.getFullYear().toString();
  const adding_dates = day + "-" + month + "-" + year;
  return adding_dates;
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}
module.exports = {
  insertOrder: (req) => {
    const query = "UPDATE product SET ? WHERE id=?";

    return new Promise((resolve, reject) => {
      req.map((data, index) => {
        con.query(
          `INSERT INTO orders SET ?`,
          [
            {
              id_product: data.id_product,
              id_seller: data.id_seller,
              id_buyer: data.id_user,
              date_order: order_date(),
              quantity: data.quantity,
              status: "proccess",
            },
          ],
          function (err, result) {
            if (err) {
              throw err;
            } else {
              resolve(result);
            }
          }
        );
        con.query(query, [
          {
            stock_product:
              parseInt(data.stock_product) - parseInt(data.quantity),
          },
          data.id_product,
        ]);
      });
    });
  },
  getOrder: (req) => {
    const { id_seller, id_buyer, type } = req;
    return new Promise((resolve, reject) => {
      con.query(
        "SELECT *,orders.id AS id, product.product_name, user.username, category.category_name FROM `orders` INNER JOIN product ON orders.id_product=product.id INNER JOIN user ON orders.id_buyer=user.id INNER JOIN category ON product.id_category=category.id WHERE ? ORDER BY orders.id  DESC",
        [type === "seller" ? { id_seller: id_seller } : { id_buyer: id_buyer }],
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
  updateOrder: (req) => {
    console.log(req);
    const query = "UPDATE product SET ? WHERE id=?";

    return new Promise((resolve, reject) => {
      con.query(
        "UPDATE orders SET ? WHERE id=?",
        [
          {
            id_product: req.id_product,
            id_seller: req.id_seller,
            id_buyer: req.id_user,
            date_order: order_date(),
            quantity: req.quantity,
            status: req.status,
          },
          req.id,
        ],
        function (err, result) {
          if (err) {
            throw err;
          } else {
            resolve(result);
          }
        }
      );
      if (req.status === "reject") {
        con.query(query, [
          {
            stock_product: parseInt(req.stock_product) + parseInt(req.quantity),
          },
          req.id_product,
        ]);
      }
    });
  },
  deleteOrder: (req) => {
    return new Promise((resolve, reject) => {
      con.query(
        "DELETE FROM orders WHERE id=?",
        req.id,
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
