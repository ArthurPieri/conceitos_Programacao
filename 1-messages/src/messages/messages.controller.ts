import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return `all messages`;
  }

  @Post()
  // This maybe weird, but we will use the CreateMessageDto as a type
  // and Nest will do the magic of validating if the body has a "variable" with the type we defined
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return `message by id`;
  }
}
