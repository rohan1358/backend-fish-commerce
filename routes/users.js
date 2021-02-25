var express = require("express");
var router = express.Router();
const controller = require("../src/controller/user");
/* GET users listing. */
router.get("/", controller.getUser);
router.post("/insert-user", controller.insertUser);
router.patch("/update", controller.updateUser);
router.post("/login", controller.loginUser);
router.delete("/delete/:id", controller.deleteUser);

module.exports = router;
