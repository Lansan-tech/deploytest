import { Controller, Get } from '@nestjs/common';
import { HousesService } from './houses.service';

@Controller()
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get()
  getHello(): string {
    return this.housesService.getHello();
  }
}
