import { Injectable } from '@nestjs/common';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { breads } from './entities/bread.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreadsService {
  constructor(
    @InjectRepository(breads) private breadRepository: Repository<breads>,
  ) {}

  create(createBreadDto: CreateBreadDto) {
    const newBread = this.breadRepository.create(createBreadDto);
    this.breadRepository.save(newBread);
    return '새 빵 등록';
  }

  findAll() {
    return this.breadRepository.find();
  }

  findOne(id: number) {
    return this.breadRepository.findOne({ where: { id } });
  }

  update(id: number, updateBreadDto: UpdateBreadDto) {
    return `This action updates a #${id} bread`;
  }

  remove(id: number) {
    return `This action removes a #${id} bread`;
  }
}
