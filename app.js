var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/product");
var cartRouter = require("./routes/cart");
var categoryRouter = require("./routes/category");
var stockRouter = require("./routes/stock");
var orderRouter = require("./routes/order");
var multer = require("multer");
var upload = multer();
var app = express();
var cors = require("cors");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/upload", express.static("./public/uploads"));
app.use("/stock", stockRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3200, () => {
  console.log("app listening port 3200");
});

module.exports = app;
