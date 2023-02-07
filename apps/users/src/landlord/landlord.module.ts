import { Module } from '@nestjs/common';
import { LandlordService } from './landlord.service';
import { LandlordResolver } from './landlord.resolver';

@Module({
  imports: [],
  providers: [LandlordService, LandlordResolver],
  controllers: [],
})
export class LandlordModule {}
