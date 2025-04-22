import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Reply } from './entities/reply.entity';

@Injectable()
export class RepliesService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Reply) private replyRepository: Repository<Reply>,
  ) {}

  async create(createReplyDto: CreateReplyDto) {
    const { content, author, post: postId } = createReplyDto;
    const user = await this.userRepository.findOne({ where: { id: author } });
    if (!user) return { success: false, massage: '없는 유저 입니다.' };
    const post = await this.postRepository.findOne({ where: { id: postId } });
    if (!post) return { success: false, massage: '없는 게시글입니다.' };

    const newReply = await this.replyRepository.create({
      content,
      author: user,
      post: post,
    });
    await this.replyRepository.save(newReply);
    return { success: true, message: '댓글 추가 완료' };
  }

  async findAll() {
    const allreply = await this.replyRepository.find();
    return { success: true, message: `모든 댓글`, data: allreply };
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`;
  }

  update(id: number, updateReplyDto: UpdateReplyDto) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
