const { Option } = require("./option.js");

class SettlementOption extends Option {
  async execute(data) {
    console.log("정산 시작!");
  }
}
module.exports = { SettlementOption };
