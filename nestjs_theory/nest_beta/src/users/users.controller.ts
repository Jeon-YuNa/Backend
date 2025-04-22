import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  ParseEnumPipe,
  DefaultValuePipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UnauthorizedException,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailPipe } from 'src/email/email.pipe';
import { BreadPipe } from 'src/bread/bread.pipe';
import { CoffeePipe } from 'src/coffee/coffee.pipe';
import { BroException } from 'src/all/bro';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

enum LolPosition {
  TOP = 'TOP',
  JUGGLE = 'JG',
  MIDDLE = 'MID',
  AD = 'AD',
  SURPORT = 'SP',
}
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '김씨 찾기' })
  @ApiResponse({ status: 200, description: '김씨 찾음' })
  @Get('/kim/:id')
  findKim(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id);
    return {
      // message: 'ParseIntPipe 예시',
      id: id,
      // type: typeof id,
    };
  }

  @Get('/lee')
  findLee(@Query('isHuman', ParseBoolPipe) isHuman: boolean) {
    return {
      // message: 'ParseBoolPipe 예시',
      isHuman: isHuman,
      // type: typeof isHuman,
    };
  }

  @Get('/park/:position')
  findPark(
    @Param('position', new ParseEnumPipe(LolPosition)) position: LolPosition,
  ) {
    return {
      // message: 'ParseEnumPipe 예시',
      position: position,
      // type: typeof position,
    };
  }

  @Get('/choi')
  findChoi(
    @Query('count', new DefaultValuePipe(1), ParseIntPipe) count: number,
    @Query('min', new DefaultValuePipe(100), ParseIntPipe) min: number,
  ) {
    return {
      // message: 'ParseEnumPipe 예시',
      count,
      min,
    };
  }

  @Post('/jeon')
  @UsePipes(new ValidationPipe({ transform: true }))
  findJeon(@Body() dto: CreateUserDto) {
    return {
      // message: '성공',
      dto: dto,
    };
  }

  @Post('/bread')
  @UsePipes(BreadPipe)
  findBread(@Body() bread: string) {
    return {
      // message: '성공',
      bread,
    };
  }
  @Post('/coffee')
  @UsePipes(CoffeePipe)
  findCoffee(@Body() coffee: string) {
    return {
      // message: '성공',
      coffee,
    };
  }

  @Get('/yuna')
  // @UseFilters()
  findYuna() {
    throw new BroException('브로인셉션', 400);
  }
  @Get('/right')
  findRight() {
    throw new BadRequestException('지각생 우현서');
  }
  @Get('/well')
  findWell() {
    throw new NotFoundException('그만 지각해');
  }
}
