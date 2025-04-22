import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreadsModule } from './breads/breads.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { breads } from './breads/entities/bread.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'Breads',
      // synchronize: true,
      entities: [breads],
    }),
    BreadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
