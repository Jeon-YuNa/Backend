import { PrismaClient } from "@prisma/client";
import readline from "readline";

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  const professors = await prisma.professors.findMany();

  console.log("교수 관련 프로그램");
  while (true) {
    console.log("1. 교수관련 내용");
    console.log("2. 수강과목 관련 내용");
    console.log("0. 종료");

    const answerFir = await askQuestion("번호 입력: ");

    if (answerFir === "0") {
      console.log("프로그램을 종료합니다.");
      rl.close(); // readline 종료
      break;
    }

    switch (answerFir) {
      case "1":
        console.log("1. 교수 등록");
        console.log("2. 교수 수정");
        console.log("3. 교수 삭제");
        console.log("4. 교수 조회");

        const answerSec = await askQuestion("번호 입력: ");
        if (answerSec == "1") {
          const answerThr = await askQuestion("교수이름,전공과목");
          const [professorName, professorMajor] = answerThr.split(",");
          const newProfessor = await prisma.professors.create({
            data: {
              name: professorName.trim(),
              major_id: Number(professorMajor),
            },
          });
          console.log("교수 추가 완료:", newProfessor);
        } else if (answerSec == "2") {
          const answerThr = await askQuestion("교수 이름 수정");
          // 몰루
        } else if (answerSec == "3") {
          const professorName = await askQuestion("삭제 할 교수 이름");
          const deletedProfessor = await prisma.professors.delete({
            where: {
              id: 0,
              name: String(professorName),
            },
          });
          console.log("삭제된 교수:", deletedProfessor);
        }

        // 예: const professors = await prisma.professors.findMany();
        break;
      case "2":
        console.log("👉 수강과목 정보를 처리합니다.");
        // 예: const courses = await prisma.courses.findMany();
        break;
      default:
        console.log("❗ 잘못된 입력입니다. 다시 입력해주세요.");
        break;
    }
  }
};
main();
