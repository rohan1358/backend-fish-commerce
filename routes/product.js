var express = require("express");
var multer = require("multer");
var patch = require("path");
var router = express.Router();

const app = express();
const product = require("../src/controller/product");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage });

// app.use(upload.array("files"));
/* GET users listing. */
// product.InsertProduct
router.post("/insert", upload.single("image"), product.InsertProduct);
router.get("/", product.getAllProduct);
router.post("/product-seller", product.getProductBySeller);
router.patch("/update", upload.single("image"), product.updateProduct);
router.delete("/delete/:id", product.deleteUser);

module.exports = router;
