import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonLogger } from './logger/winston-logger.provider';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: WinstonLogger,
  ) {}

  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
