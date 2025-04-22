const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const express = require("express");
const daisoRouter = express.Router();

daisoRouter.get("/", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});
daisoRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.product.findMany();
  const filterData = data.filter((v) => v.id == id);
  res.json(filterData);
});
daisoRouter.post("/", async (req, res) => {
  const data = await prisma.product.findMany();
  data.push({ ...req.body });
  res.json(data);
});
daisoRouter.put("/", async (req, res) => {
  const data = await prisma.product.findMany();
  const target = data.findIndex((v) => v.id == +req.body.id);
  console.log(target);
  data[target] = { ...req.body };
  res.json({ success: true, message: "상품 업데이트 완료!" });
});
module.exports = { daisoRouter };
