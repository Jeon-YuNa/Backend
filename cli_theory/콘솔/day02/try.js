const fs = require("fs");

// 런타임 에러
// 파일연결, 네트워크연결(api), 디비연결
// try - catch를 써서 프로그램 정상 작동화 시킴

// try {
//   const data = fs.readFileSync("coffee1234.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("파일 없음");
// }

// try {
//   console.log("작업 시작");
//   const result = 10 / 0;
//   throw new Error("일부로 에러 던짐");
// } catch (e) {
//   console.log(e, e.message);
// }

const divide = (a, b) => {
  if (b == 0) throw newError("0으로 못나눔");
  return a / b;
};

try {
  console.log(divide(10, 3));
  console.log(divide(10, 0));
} catch (e) {
  console.log(e, e.message);
}
