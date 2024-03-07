import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class SendMediaService {
  URL_API = 'https://apiwpp.marrera.net';
  config = {
    headers: {
      apiKey: '62ce3b0f-6604-4df8-bbda-8707380a03fb',
    },
  };

  constructor(private readonly http: HttpService) {}

  //TODO: Verificar melhor tipagens
  async sendMedia(instanceToken: string, payload: any) {
    // console.log(res.instance);
    const configPost = {
      headers: {
        apikey: instanceToken,
      },
    };

    console.log('configPost', configPost);

    return await lastValueFrom(
      this.http
        .post(
          `${this.URL_API}/message/sendMedia/${instanceToken}`,
          payload,
          configPost,
        )
        .pipe(map((resp) => resp.data)),
    );
  }
}
