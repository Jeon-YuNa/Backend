const { Option } = require("./option.js");

class InvalidOption extends Option {
  async execute() {
    console.log("없는 번호");
  }
}

module.exports = { InvalidOption };
