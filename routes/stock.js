var express = require("express");
var router = express.Router();
var controller = require("../src/controller/stock");

router.post("/insert", controller.insertStock);
router.patch("/update", controller.updateStock);
router.delete("/delete/:id_product", controller.deleteStock);
module.exports = router;
