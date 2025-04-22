import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGuestbookDto {
  @IsString()
  @IsNotEmpty({ message: '작성자는 필수 입력값입니다.' })
  @MinLength(2, { message: '작성자는 2글자 이상입니다.' })
  @MaxLength(20, { message: '작성자는 20글자 이하입니다.' })
  author: string;

  @IsString()
  @IsNotEmpty({ message: '내용은 필수 입력값입니다.' })
  @MinLength(5, { message: '내용은 5글자 이상입니다.' })
  @MaxLength(500, { message: '내용은 500글자 이하입니다.' })
  content: string;
}
