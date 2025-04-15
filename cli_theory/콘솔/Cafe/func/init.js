//import export browser
// require module.export

const { Coffee } = require("./doyou.js");
const { managers } = require("../manager/base.js");

const initializeData = () => {
  const { data } = managers;
  if (data.existData()) {
    //파일이 있을때
    const getData = data.getData();
    const { coffeeMenu } = getData;
    const newData = coffeeMenu.map((v) => new Coffee(v.name, v.stock, v.price));
    return newData;
  } else {
    //파일이 없을때
    const initData = {
      coffeeMenu: [
        { name: "아메리카노", stock: 0, price: 3000 },
        { name: "우유라떼", stock: 0, price: 3500 },
        { name: "두유라떼", stock: 0, price: 4000 },
      ],
    };
    data.saveData("coffeeMenu", initData);
    return data.getData();
  }
};

// export 문법
module.exports = { initializeData };
