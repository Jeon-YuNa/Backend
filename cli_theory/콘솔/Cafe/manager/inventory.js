class InventoryManager {
  listProduct(data) {
    data.forEach((v, i) =>
      console.log(`${i + 1}. ${v.getName()} ${v.getStock()}`)
    );
  }
  replenishProduct(data, amount) {
    data.setStock(amount);
  }
}
module.exports = { InventoryManager };
