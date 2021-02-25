var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fishcommerce",
  multipleStatements: true,
});
con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
  }
});
module.exports = con;
