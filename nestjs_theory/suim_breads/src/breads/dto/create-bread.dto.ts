import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBreadDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
