import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMediaService } from 'src/business/messages/send-media.service';
import { SendMediaRequest } from 'src/models/send-media-request';

@ApiTags('Messages')
@Controller()
export class SendMediaController {
  constructor(private readonly messageService: SendMediaService) {}

  @Post('send-media/id=:instanceId')
  async sendMessage(
    @Param('instanceId') instanceId: string,
    @Body() payload: SendMediaRequest,
  ) {
    // console.log(instanceId);
    const response = await this.messageService.sendMedia(instanceId, payload);
    return response;
  }
}
