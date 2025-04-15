const { Option } = require("./option.js");

class ReplenishOption extends Option {
  #inventoryManager;
  #promptManager;
  #dataManager;
  constructor(inventoryManager, promptManager, dataManager) {
    super();
    this.#inventoryManager = inventoryManager;
    this.#promptManager = promptManager;
    this.#dataManager = dataManager;
  }

  async execute(data) {
    this.#promptManager.makeConsole("어떤 재고를 채우시겠습니까?");

    //보급관리[리스팅]
    this.#inventoryManager.listProduct(data);
    //질문관리자
    const [menu, amount] = await this.#promptManager.askNumberAndAmount();
    //보급관리[보급]
    this.#inventoryManager.replenishProduct(data[+menu - 1], +amount);
    //저장관리자
    this.#dataManager.saveData("coffeeMenu", data);

    this.#promptManager.makeConsole("재고 업데이트 완료!");
  }
}

module.exports = { ReplenishOption };
