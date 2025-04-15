import { PrismaClient } from "@prisma/client";
import { askMenu, askQuestion } from "./prompt";

const prisma = new PrismaClient();

async function main() {
  console.log("대학교 인원관리 프로그램 실행");

  // 비동기 함수로 메뉴를 표시하고 사용자 입력을 받는 로직 변경

  // 메뉴를 한번만 출력하고, 그 다음에 번호를 입력받도록 수정
  while (true) {
    askMenu();
    const answer = await askQuestion("번호입력: ");

    switch (answer) {
      case "1":
        console.log("1. 교수 등록");
        console.log("교수정보를 입력하세요");

        const professor_name = await askQuestion("교수 이름 입력 ");
        const professor_majorId = await askQuestion("전공번호 입력");

        try {
          const result = await prisma.professors.create({
            data: {
              professor_name,
              major_id: Number(professor_majorId),
            },
          });

          console.log("교수 등록 성공:", result);
        } catch (error) {
          console.error("교수 등록 실패:", error);
        }
        break;

      case "2":
        console.log("교수 수정 선택");
        const professorIdToUpdate = await askQuestion("수정할 교수 ID 입력: ");
        const updatedProfessorName = await askQuestion("교수이름 수정: ");
        const updatedProfessorMajorId = await askQuestion("교수 전공 수정: ");

        try {
          const updatedStudent = await prisma.professors.update({
            where: { id: Number(professorIdToUpdate) },
            data: {
              professor_name: updatedProfessorName,
              major_id: Number(updatedProfessorMajorId),
            },
          });

          console.log("교수정보 수정완료:", updatedStudent);
        } catch (error) {
          console.error("교수 수정 실패:", error);
        }
        break;

      case "3":
        console.log("교수 삭제 선택");
        const professorIdToDelete = await askQuestion("삭제할 교수 ID 입력: ");

        try {
          const deletedProfessor = await prisma.professors.delete({
            where: { id: Number(professorIdToDelete) },
          });

          console.log("교수 삭제 완료:", deletedProfessor);
        } catch (error) {
          console.error("교수 삭제 실패:", error);
        }
        break;

      case "4":
        console.log("교수 조회 선택");
        const professorIdToQuery = await askQuestion("조회할 교수 ID 입력: ");

        try {
          const professor = await prisma.professors.findUnique({
            where: { id: Number(professorIdToQuery) },
          });

          if (professor) {
            console.log("교수 정보:", professor);
          } else {
            console.log("해당 교수를 찾을 수 없습니다.");
          }
        } catch (error) {
          console.error("교수 조회 실패:", error);
        }
        break;

      case "5":
        console.log("교수 강의목록 추가");
        const professorIdForCourseAdd = await askQuestion(
          "수강과목을 등록할 교수 ID 입력: "
        );
        const courseNameToAdd = await askQuestion("등록할 과목 이름 입력: ");

        try {
          // 수강 과목 등록 로직을 추가합니다.
          const newCourse = await prisma.courses.create({
            data: {
              course_name: courseNameToAdd,
              professor_id: Number(professorIdForCourseAdd),
            },
          });
          console.log(newCourse, `등록`);
        } catch (error) {
          console.error("수강 과목 등록 실패:", error);
        }
        break;

      case "6":
        console.log("교수 강의목록 철회");
        const studentIdForCourseRemove = await askQuestion(
          "수강과목을 철회할 교수 ID 입력: "
        );
        const courseIdToRemove = await askQuestion("철회할 과목 이름 입력: ");

        try {
          // 수강 과목 철회 로직을 추가합니다.
          const newCourse = await prisma.courses.delete({
            where: {
              course_name_professor_id: {
                course_name: courseIdToRemove,
                professor_id: Number(studentIdForCourseRemove),
              },
            },
          });

          console.log("강의 삭제 완료");
        } catch (error) {
          console.error("강의 삭제 실패:", error);
        }
        break;
      case "7":
        console.log("프로그램 종료");
        process.exit(0);

      default:
        console.log("잘못된 입력입니다. 다시 시도해주세요.");
    }
  }
}

main();
