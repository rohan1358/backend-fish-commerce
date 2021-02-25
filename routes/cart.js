var express = require("express");
var router = express.Router();
const cart = require("../src/controller/cart");
var multer = require("multer");
var upload = multer();
express().use(upload.array());
router.post("/insert", cart.insertCart);
router.put("/", cart.getCart);
router.patch("/update", cart.updateCart);
router.post("/delete/:id", cart.deleteCart);

module.exports = router;
