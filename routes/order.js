var express = require("express");
var router = express.Router();
const controller = require("../src/controller/order");
/* GET users listing. */
router.post("/", controller.getOrder);
router.post("/insert", controller.insertOrder);
router.patch("/update", controller.updateOrder);
// router.post("/login", controller.loginOrder);
router.delete("/delete/:id", controller.deleteOrder);

module.exports = router;
