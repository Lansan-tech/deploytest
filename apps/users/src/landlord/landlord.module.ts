import { Module } from '@nestjs/common';
import { LandlordService } from './landlord.service';
import { LandlordResolver } from './landlord.resolver';

@Module({
  providers: [LandlordService, LandlordResolver],
})
export class LandlordModule {}
