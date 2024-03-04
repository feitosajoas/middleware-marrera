import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class SendMessageTextService {
  URL_API = 'https://apiwpp.marrera.net';
  config = {
    headers: {
      apiKey: '62ce3b0f-6604-4df8-bbda-8707380a03fb',
    },
  };

  constructor(private readonly http: HttpService) {}

  async sendMessage(instanceToken: string, payload: any) {
    const request = this.http
      .get(`${this.URL_API}/instance/fetchInstances`, this.config)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const instances = await lastValueFrom(request);
    const res = instances.find((element) => {
      return element.instance.instanceId === instanceToken;
    });

    console.log(res.instance);
    // console.log(res.instance.apikey, res.instance.instanceName);
    const configPost = {
      headers: {
        apikey: res.instance.apikey,
      },
    };

    console.log('configPost', configPost);

    return await lastValueFrom(
      this.http
        .post(
          `${this.URL_API}/message/sendText/${res.instance.instanceName}`,
          payload,
          configPost,
        )
        .pipe(map((resp) => resp.data)),
    );
  }
}
