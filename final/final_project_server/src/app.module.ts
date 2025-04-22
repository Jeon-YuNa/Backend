import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestbookModule } from './guestbook/guestbook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guestbook } from './guestbook/entities/guestbook.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'final',
      entities: [Guestbook],
      synchronize: true,
    }),
    GuestbookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
