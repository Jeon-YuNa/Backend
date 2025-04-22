import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // npm install class-validator class-transformer 이거 설치하고나서 해줘야함
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
