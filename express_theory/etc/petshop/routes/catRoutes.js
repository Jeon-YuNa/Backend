const { cats } = require("../data/cats.js");
const express = require("express");
const catRouter = express.Router();

catRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const data = cats
    .filter((v) => +minAge <= v.age && v.age <= +maxAge)
    .filter((v) => !gender || v.gender === gender);
  res.json(data);
});

catRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  cats.push({ name, age, species, gender });
  res.json(cats);
});

module.exports = catRouter;
