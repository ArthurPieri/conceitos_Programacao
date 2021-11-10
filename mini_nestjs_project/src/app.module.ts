import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Modules are used to help bundle code together
// Modules need a object
@Module({
  // List all the controllers that exists in our aplication
  // Then will create a instance of all the controllers
  controllers: [AppController],
})
export class AppModule {}
