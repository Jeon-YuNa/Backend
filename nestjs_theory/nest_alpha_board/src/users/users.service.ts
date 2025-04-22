import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return { success: true, message: `${newUser.nickname} 생성됨` };
  }

  async findAll() {
    const allUser = await this.userRepository.find();
    return { success: true, message: `모든유저`, data: allUser };
  }

  async findOne(id: number) {
    const targetUser = await this.userRepository.findOne({ where: { id } });
    return {
      success: true,
      message: `${targetUser?.nickname}유저`,
      data: targetUser,
    };
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { success: true, message: `${id} 삭제됨` };
  }
}
