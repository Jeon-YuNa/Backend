const addMenuMain = async () => {
  console.log("<메뉴 등록>");
  const readline = require("readline");

  const askQuestion = (query) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((success) => rl.question(query, success));
  };
  const test = true;
  if (test) {
    const menuKo = await askQuestion("메뉴 이름(한글): ");
    return menuKo;
  } else if (menuKo) {
  }
  //   while (true) {
  //     const menuKo = await askQuestion("메뉴 이름(한글): ");
  //     const menuEn = await askQuestion("메뉴 이름(영문): ");
  //   }
};
addMenuMain();
