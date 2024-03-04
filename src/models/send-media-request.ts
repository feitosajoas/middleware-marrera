import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MediaMessage {
  @ApiProperty({
    description: 'Tipo de mídia. Ex.: video ou image',
    type: 'string',
  })
  @IsNotEmpty()
  mediatype: string;

  @ApiPropertyOptional({
    description: 'Mensagem a ser exibida',
    type: 'string',
  })
  @IsNotEmpty()
  caption: string;

  @ApiProperty({
    description:
      'Base64 ou link. Ex.: https://evolution-api.com/files/video.mp4',
    type: 'string',
  })
  @IsNotEmpty()
  media: string;
}

export class SendMediaRequest {
  @ApiProperty({
    description: 'Número de telefone a ser enviado a mensagem.',
    type: 'string',
  })
  @IsNotEmpty()
  number: string;

  @ApiProperty()
  @IsNotEmpty()
  mediaMessage: MediaMessage;
}
