import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TextMessage {
  @ApiProperty()
  @IsNotEmpty()
  text: string;
}

export class SendMessageRequest {
  @ApiProperty({
    description: 'Número de telefone a ser enviado a mensagem.',
    type: 'string',
  })
  @IsNotEmpty()
  number: string;

  @ApiProperty()
  @IsNotEmpty()
  textMessage: TextMessage;
}
