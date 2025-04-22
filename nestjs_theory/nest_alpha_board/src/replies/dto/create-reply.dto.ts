import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateReplyDto {
  @IsString()
  @IsNotEmpty({ message: '댓글을 입력해주세요.' })
  @MaxLength(200, { message: '제목은 200글자 이하입니다.' })
  content: string;

  @IsInt()
  @Min(1)
  @Type(() => Number) // 이거 붙여야 클라이언트 String을 Number로 바꿔줌
  author: number;

  @IsInt()
  @Min(1)
  @Type(() => Number) // 이거 붙여야 클라이언트 String을 Number로 바꿔줌
  post: number;
}
