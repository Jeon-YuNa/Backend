const { dogs } = require("../data/dogs.js");
const express = require("express");
const dogRouter = express.Router();

dogRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const data = dogs
    .filter((v) => +minAge <= v.age && v.age <= +maxAge)
    .filter((v) => !gender || v.gender === gender);
  res.json(data);
});

dogRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json(dogs[+id]);
});

dogRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  dogs.push({ name, age, species, gender });
  res.json(dogs);
});
module.exports = dogRouter;
