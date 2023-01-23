import { Module } from '@nestjs/common';
import { LandlordService } from './landlord.service';
import { LandlordResolver } from './landlord.resolver';
import { LandlordController } from './landlord.controller';

@Module({
  providers: [LandlordService, LandlordResolver],
  controllers: [LandlordController],
})
export class LandlordModule {}
