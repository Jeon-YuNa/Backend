const { initializeData } = require("./func/init.js");
const { menuOption } = require("./option/base.js");
const { InvalidOption } = require("./option/invaild.js");
const { managers } = require("./manager/base.js");

const main = async () => {
  const data = initializeData();
  console.log("두유 월드 카페 오신걸 환영합니다~!");
  while (true) {
    console.log("1. 판매하기");
    console.log("2. 재고 채우기");
    console.log("3. 금일 정산");
    console.log("4. 시스템 종료");

    const answer = await managers.prompt.askQuestion("번호 입력:");
    const option = menuOption[answer] || new InvalidOption();
    await option.execute(data);
  }
};
main();
