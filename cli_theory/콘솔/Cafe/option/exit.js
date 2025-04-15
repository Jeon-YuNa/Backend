const { Option } = require("./option.js");

class ExitOption extends Option {
  async execute(data) {
    console.log("종료!");
  }
}

module.exports = { ExitOption };
