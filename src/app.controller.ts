import { SentryInterceptor } from './sentry-interceptor';
import { Controller, Get, InternalServerErrorException, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new InternalServerErrorException();
    return this.appService.getHello();
  }
}
