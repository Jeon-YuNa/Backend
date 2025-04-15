const express = require("express");
const app = express();
const { carsRouter } = require("./routes/carsRouter.js");

app.use(express.urlencoded({ extended: true })); // x-form-encoded
app.use(express.json());
app.use("/cars", carsRouter);

app.listen(3000, () => {
  console.log("애니카 서버");
});
