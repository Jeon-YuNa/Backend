import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const user = await this.userRepository.findOne({
      where: { id: createPostDto.author },
    });
    if (!user) return { success: false, message: '없는 유저 입니다.' };

    const { title, content } = createPostDto;
    const entity = this.postRepository.create({ title, content, author: user }); // user[id, nickname]
    this.postRepository.save(entity);

    return { success: true, message: `${title} 게시판 등록` };
  }

  async findAll() {
    const allPosts = await this.postRepository.find();
    return { success: true, message: `모든 게시판`, data: allPosts };
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) return { success: false, massage: '없는 게시판입니다.' };
    return { success: true, massage: `${id} 게시판`, data: post };
  }
  update(id: number, postRepository: UpdatePostDto) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
