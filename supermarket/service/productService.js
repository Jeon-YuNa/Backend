const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const productsService = {
  async getAll() {
    return await prisma.products.findMany();
  },
  async getById(id) {
    const filterData = await prisma.products.findUnique({
      where: { id: +id },
    });
    return filterData;
  },
  async create(name, price) {
    const newData = await prisma.products.create({
      data: {
        name: name,
        price: +price,
      },
    });
    return newData;
  },
  async update(id, name, price) {
    return await prisma.products.update({
      where: { id: id },
      data: {
        name: name,
        price: price,
      },
    });
  },
  async delete(id) {
    return await prisma.products.delete({
      where: { id: id },
    });
  },
};
module.exports = { productsService };
