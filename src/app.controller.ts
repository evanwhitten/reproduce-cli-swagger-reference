import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloDto, GetHelloSeperateDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloDto {
    const response: GetHelloDto = this.appService.getHello();
    return response;
  }

  @Get()
  getHelloSeperate(): GetHelloSeperateDto {
    const response: GetHelloSeperateDto = this.appService.getHello();
    return response;
  }
}
