const http = require("http");

const s1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("공지사항: 수업시간 외에 로밍 그만하기");
});
s1.listen(3000, "localhost", () => {
  console.log("서버시작!");
});
