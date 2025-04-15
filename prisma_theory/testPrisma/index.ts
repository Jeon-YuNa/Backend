import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const students = await prisma.students.findMany();
  console.log(students);
};
main();
