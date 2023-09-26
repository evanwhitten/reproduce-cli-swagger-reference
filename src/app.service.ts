import { Injectable } from '@nestjs/common';
import { GetHelloDto } from './app.dto';

@Injectable()
export class AppService {
  getHello(): GetHelloDto {
    return {
      hello: [
        {
          name: 'Hello World!',
        },
      ],
    };
  }
}
