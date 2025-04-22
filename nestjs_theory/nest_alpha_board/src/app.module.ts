import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RepliesModule } from './replies/replies.module';
import { User } from './users/entities/user.entity';
import { Post } from './posts/entities/post.entity';
import { Reply } from './replies/entities/reply.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test', //DB 이름
      synchronize: true, // 개발 환경에서만 true (자동 테이블 생성)
      entities: [User, Post, Reply], // 전체 엔티티 등록
    }),
    UsersModule,
    PostsModule,
    RepliesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
