const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const express = require("express");
const app = express();

app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.product.findMany();
  const filterData = data.filter((v) => v.id == id);
  res.json(filterData);
});

app.listen(3000, () => {
  console.log("다이소 서버");
});
