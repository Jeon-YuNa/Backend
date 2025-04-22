const { checkPostData } = require("../middleware/postCheck.js");
const { checkPutData } = require("../middleware/putCheck.js");
const { checkDeleteData } = require("../middleware/deleteCheck.js");
const { productsService } = require("../service/productService.js");
const express = require("express");
const superRouter = express.Router();

//전체조회
superRouter.get("/", async (req, res) => {
  const productsList = await productsService.getAll();
  res.json(productsList);
});
// 상세조회
superRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const filterData = await productsService.getById(id);
  res.json(filterData);
});
// 상품 추가
superRouter.post("/", checkPostData, async (req, res) => {
  const newData = await productsService.create(req.body.name, +req.body.price);
  res.json(newData);
});
// 상품 수정
superRouter.put("/", checkPutData, async (req, res) => {
  await productsService.update(req.body.id, req.body.name, +req.body.price);
  res.json({ success: true, message: "상품 업데이트 완료!" });
});
// 상품 삭제
superRouter.delete("/", checkDeleteData, async (req, res) => {
  await productsService.delete(req.body.id);
  res.json({ success: true, message: "상품 삭제 완료!" });
});
module.exports = { superRouter };
