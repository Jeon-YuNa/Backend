const express = require("express");
const app = express();
const { superRouter } = require("./router/productRoute.js");

app.use(express.urlencoded({ extended: true })); // x-form-encoded
app.use(express.json());
app.use("/products", superRouter);

app.listen(3000, () => {
  console.log("슈퍼마켓 서버");
});
