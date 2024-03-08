import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMessageRequest } from 'src/models/send-message-request';
import { SendMessageTextService } from './../../business/messages/send-message-text.service';

@ApiTags('Messages')
@Controller()
export class SendMessageTextController {
  constructor(private readonly messageService: SendMessageTextService) {}

  @Post('send-message/id=:instanceId')
  async sendMessage(
    @Param('instanceId') instanceId: string,
    @Body() payload: SendMessageRequest,
  ) {
    // console.log(instanceId);
    const response = await this.messageService.sendMessage(instanceId, payload);
    return response;
  }
}
