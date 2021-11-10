import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// This is a Decorator, it shows Nest that we are trying to create a class that is a controller
// Controllers are used to handle requests
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Well, Hello there';
  }
}

// Modules are used to help bundle code together
// Modules need a object
@Module({
  // List all the controllers that exists in our aplication
  // Then will create a instance of all the controllers
  controllers: [AppController],
})
class AppModule {}

// The aplication actually starts here
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
