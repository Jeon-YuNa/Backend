import * as readline from "readline";

// readline 인터페이스 생성
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askMenu = () => {
  console.log("1.교수 등록");
  console.log("2.교수 수정");
  console.log("3.교수 삭제");
  console.log("4.교수 조회");
  console.log("5.교수 강의 등록");
  console.log("6.교수 강의 철회");
  console.log("7.프로그램 종료");
};

// 질문을 묻고 답을 받는 함수
const askQuestion = (query: string): Promise<string> =>
  new Promise((resolve) => r1.question(query, resolve));

export { askQuestion, askMenu };
