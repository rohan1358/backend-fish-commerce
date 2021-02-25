var express = require("express");
var router = express.Router();
const controller = require("../src/controller/category.js");
router.get("/", controller.getCategory);
module.exports = router;
