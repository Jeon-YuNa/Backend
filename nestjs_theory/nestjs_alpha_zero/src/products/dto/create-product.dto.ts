import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: '아이디 값이 비어있습니다.' })
  @IsInt()
  id: number;

  @IsNotEmpty({ message: '이름 값이 비어있습니다.' })
  @IsString({ message: '이름에 숫자가 들어가있습니다.' })
  @Length(1, 10)
  name: string; // 1~20 글자까지

  @IsNotEmpty({ message: '가격 값이 비어있습니다.' })
  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number;
}
