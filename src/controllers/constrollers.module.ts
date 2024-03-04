import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SendMediaService } from 'src/business/messages/send-media.service';
import { SendMessageTextService } from 'src/business/messages/send-message-text.service';
import { SendMediaController } from './messages/send-media.controller';
import { SendMessageTextController } from './messages/send-message-text.controller';

@Module({
  imports: [HttpModule],
  controllers: [SendMessageTextController, SendMediaController],
  providers: [SendMessageTextService, SendMediaService],
})
export class ConstrollersModule {}
