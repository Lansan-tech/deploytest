import { Body, Controller, Post } from '@nestjs/common';
import { LandlordService } from './landlord.service';

@Controller('landlord')
export class LandlordController {
  constructor(private landLordService: LandlordService) {}
  @Post()
  testLandLord(@Body() testData: any) {
    return this.landLordService.create(testData);
  }
}
