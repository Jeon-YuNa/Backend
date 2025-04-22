import { IsEmpty, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '닉네임을 한글자 이상 입력하세요.' })
  @IsString()
  @Length(1, 30, { message: '닉네임은 1~30글자 사이여야 합니다.' })
  nickname: string;
}
