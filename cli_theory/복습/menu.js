class addMenu {
  #nameKo;
  #nameEn;
  #description;
  #option;
  #image;
  #price;

  constructor(nameKo, nameEn, description, option, image, price) {
    this.#nameKo = nameKo;
    this.#nameEn = nameEn;
    this.#description = description;
    this.#option = option;
    this.#image = image;
    this.#price = price;
  }

  getValue(e) {
    console.log(e.target.value);
    return e.target.value;
  }
}
module.exports = { addMenu };
