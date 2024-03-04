import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SendMessageTextService } from 'src/business/messages/send-message-text.service';
import { SendMediaService } from './messages/send-media.service';

@Module({
  imports: [HttpModule],
  providers: [SendMessageTextService, SendMediaService],
})
export class BusinessModel {}
