import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class SendMessageTextService {
  URL_API = 'https://apiwpp.marrera.net';
  config = {
    headers: {
      apiKey: '62ce3b0f-6604-4df8-bbda-8707380a03fb',
    },
  };

  constructor(private readonly http: HttpService) {}

  //TODO: Verificar melhor tipagens
  async sendMessage(instanceToken: string, payload: any) {
    // console.log(instances);
    const configPost = {
      headers: {
        apikey: instanceToken,
      },
    };

    console.log('configPost', configPost);

    return await lastValueFrom(
      this.http
        .post(
          `${this.URL_API}/message/sendText/${instanceToken}`,
          payload,
          configPost,
        )
        .pipe(map((resp) => resp.data)),
    );
  }
}
