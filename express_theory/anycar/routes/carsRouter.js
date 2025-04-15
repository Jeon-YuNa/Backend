// 라우터 만들고
// 자동차 all, 상세 이동
// app.js에서 라우터 단축화 코드
const { carService } = require("../services/carService.js");
const { validateCarData } = require("../middleware/validator.js");
const { existor } = require("../middleware/existor.js");
var express = require("express");
var carsRouter = express.Router();

carsRouter.get("/", (req, res) => {
  res.json(carService.getAll());
});

carsRouter.get("/:id", existor, (req, res) => {
  const car = carService.getById(req.params.id);
  if (!car) res.status(404).json({ success: false, message: "없는 차량" });
  res.json(car);
});

carsRouter.post("/", validateCarData, (req, res) => {
  carService.create(req.body);
  res.json({ success: true, message: "차량 등록됨" });
});

carsRouter.put("/", (req, res) => {
  const result = carService.update(req.body);
  if (!result) res.status(400).json({ success: false, message: "없는 차량" });
  res.json({ success: true, message: "차 업데이트 됨" });
});

carsRouter.delete("/", (req, res) => {
  const result = carService.deleteCar(req.body.id);
  if (!result) res.status(404).json({ success: false, message: "없는 차량" });
  res.json({ success: true, message: "차량 삭제됨" });
});

module.exports = { carsRouter };
