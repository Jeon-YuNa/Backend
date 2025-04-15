const ExcelJS = require("exceljs");

const workbook = new ExcelJS.Workbook(); // 엑셀 생성

workbook.xlsx.readFile("4월 일정표.xlsx").then(() => {
  const sheetZero = workbook.getWorksheet(1);
  sheetZero.eachRow((v, i) => {
    console.log(`${v.values}`);
  });
});
