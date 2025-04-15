const ExcelJS = require("exceljs");

const excel = new ExcelJS.Workbook();

const sheet1 = excel.addWorksheet("baskinrobbins");
const sheet2 = excel.addWorksheet("Korean");

sheet1.addRow(["이름", "칼로리", "성분"]);
sheet1.addRow(["민트초코", "259", "민트, 초코"]);
sheet1.addRow(["엄마는 외계인", "296", "초코프레첼, 화이트무스"]);
sheet1.addRow(["뉴욕치즈케이크", "275", "치즈, 크래커"]);
sheet1.addRow(["레인보우샤베트", "162", "오렌지, 라즈베리"]);
sheet1.addRow(["그린티킷캣", "282", "그린티, 밀크초콜릿"]);

sheet2.addRow(["이름", "나이", "사는 곳"]);
var namer = require("korean-name-generator");
const korea = [
  "서울",
  "경기",
  "인천",
  "강원",
  "충청",
  "전라",
  "경북",
  "경남",
  "부산",
];
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 1000; i++) {
  sheet2.addRow([
    namer.generate(rand(0, 1)),
    rand(5, 80),
    korea[rand(0, korea.length - 1)],
  ]);
}

excel.xlsx.writeFile("quiz.xlsx");
