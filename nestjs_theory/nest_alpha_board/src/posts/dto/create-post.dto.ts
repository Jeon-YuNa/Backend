import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: '제목을 입력해주세요.' })
  @MaxLength(50, { message: '제목은 50글자 이하입니다.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '내용을 입력해주세요.' })
  content: string;

  @IsInt()
  @Min(1)
  @Type(() => Number) // 이거 붙여야 클라이언트 String을 Number로 바꿔줌
  author: number;
}
