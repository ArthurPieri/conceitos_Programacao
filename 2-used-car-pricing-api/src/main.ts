import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Used to strip the body of the request of every property that are not declared on the DTO
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
