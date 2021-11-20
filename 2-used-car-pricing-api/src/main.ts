import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['asdfgzxcv'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // Used to strip the body of the request of every property that are not declared on the DTO
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
