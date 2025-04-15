const exceljs = require("exceljs");

const workbook = new exceljs.Workbook();

workbook.xlsx.readFile("202503.xlsx").then(() => {
  const day3 = workbook.getWorksheet("3");
  const newArr = [];
  day3.eachRow((v) => {
    newArr.push(v.values);
  });
  newArr.filter((v) => v.includes("수당률") || v.includes("기사"));
  console.log(newArr[4]);
});
