import { Controller, Get } from '@nestjs/common';

// This is a Decorator, it shows Nest that we are trying to create a class that is a controller
// Controllers are used to handle requests
@Controller()
export class AppController {
  // We will respond to a get request
  @Get()
  getRootRoute() {
    return 'Well, Hello there';
  }

  @Get('/asdf')
  getAsdfRoute() {
    return 'Asdf movies oh yeah';
  }

  @Get('/bye')
  getByeThere() {
    return 'Oh no, bye there';
  }
}
