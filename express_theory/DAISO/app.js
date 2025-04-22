const express = require("express");
const app = express();
const { daisoRouter } = require("./router/daisoRouter.js");

app.use(express.urlencoded({ extended: true })); // x-form-encoded
app.use(express.json());
app.use("/products", daisoRouter);

app.listen(3000, () => {
  console.log("다이소 서버");
});
