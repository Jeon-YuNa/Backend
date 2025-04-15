//profram: 어떠한 입력 값 넣으면 어떠한 출력 값이 나옴

const fs = require("fs"); //filesyetem 줄임말
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// const askQuestion = (query) =>
//   new Promise((success) => rl.question(query, success));
// const main = async () => {}
rl.question("폴더 이름", (answer) => {
  rl.question("폴더 갯수", (a) => {
    for (let i = 1; i <= a; i++) {
      fs.mkdirSync(answer + (i == 1 ? "" : i));
    }
  });
});
