import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
import { UpdateGuestbookDto } from './dto/update-guestbook.dto';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Post()
  create(@Body() createGuestbookDto: CreateGuestbookDto) {
    return this.guestbookService.create(createGuestbookDto);
  }

  @Get()
  findAll() {
    return this.guestbookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestbookService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestbookService.remove(+id);
  }
}
