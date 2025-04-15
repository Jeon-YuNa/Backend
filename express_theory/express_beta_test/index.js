const { students } = require("./students.js");
const { successResponse, failResponse } = require("./utils/response.js");
const express = require("express");
const app = express();
app.use(express.json());

//전체학생 가져오기
app.get("/students", (req, res) => {
  successResponse(res, 200, "모든 학생 데이터", students);
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const targetStudent = students.find((v) => v.id == +id);

  if (!targetStudent) {
    failResponse(
      res,
      404,
      `${id}번 학생 데이터`,
      "no found",
      "없는 학생입니다."
    );
  } else {
    successResponse(res, 200, `${id}번 학생 데이터`, targetStudent);
  }
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.body;
  const result = students.find((v) => v.id == +id);

  if (!result)
    failResponse(res, 404, `${id}번 없음`, "no found", "없는 학생입니다.");

  const filteredData = students.filter((v) => v.id != +id);
  successResponse(res, 200, `${id}번 학생 데이터`, filteredData);
});

app.listen(3000, () => {
  console.log("학생 서버 오픈");
});
