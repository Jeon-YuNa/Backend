import { Module } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { RepliesController } from './replies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './entities/reply.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, Reply])],
  controllers: [RepliesController],
  providers: [RepliesService],
})
export class RepliesModule {}
