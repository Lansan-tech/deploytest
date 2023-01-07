import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  getHello(): string {
    return 'Hello World!';
  }
}
