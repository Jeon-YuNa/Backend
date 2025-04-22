import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { TransformInterceptor } from './transform/transform.interceptor';
import { AllFilter } from './all/all.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // DTO에 명시된 키만 남기고 나머지는 자동 삭제
      forbidNonWhitelisted: true, // 허용되지 않은 키가 있으면 즉시 400 에러
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllFilter());

  const config = new DocumentBuilder().setTitle('API').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
